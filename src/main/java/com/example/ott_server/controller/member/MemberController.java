package com.example.ott_server.controller.member;

import com.example.ott_server.dto.ApiResponse;
import com.example.ott_server.dto.PasswordChangeDTO;
import com.example.ott_server.dto.member.MemberAllDTO;
import com.example.ott_server.dto.member.MemberRegisterDTO;
import com.example.ott_server.service.member.MemberService;
import com.example.ott_server.status.ResponseStatus;
import com.example.ott_server.status.ResultStatus;
import com.example.ott_server.util.WishlistHttpValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/member")
public class MemberController {

    // 멤버 서비스 인스턴스
    @Autowired
    private MemberService memberService;

    private final WishlistHttpValidation validation = new WishlistHttpValidation();

    // 전체 이메일 조회
    @GetMapping("/allEmail")
    public ResponseEntity<ApiResponse<List<String>>> getAllEmails() {
        List<String> emailList = memberService.getAllEmails();
        ApiResponse<List<String>> apiResponse = new ApiResponse<>(ResponseStatus.SUCCESS, "성공", emailList);
        return ResponseEntity.ok(apiResponse);
    }

    // 회원가입 - member, payment
    @PostMapping("/add")
    public ResponseEntity<ApiResponse<MemberRegisterDTO>> postAddMember(@RequestBody MemberRegisterDTO memberRegisterDTO) {
        ApiResponse<MemberRegisterDTO> apiResponse;

        try {
            ResultStatus resultStatus = memberService.addMemberRegister(memberRegisterDTO);

            if (resultStatus == ResultStatus.SUCCESS) {
                apiResponse = new ApiResponse<>(ResponseStatus.SUCCESS, "성공", memberRegisterDTO);
            } else {
                apiResponse = new ApiResponse<>(ResponseStatus.FAIL, "실패", null);
            }

            return ResponseEntity.ok(apiResponse);
        } catch (IllegalArgumentException e) {
            apiResponse = new ApiResponse<>(ResponseStatus.FAIL, "실패", null);
            return ResponseEntity.ok(apiResponse);
        } catch (Exception e) {
            apiResponse = new ApiResponse<>(ResponseStatus.ERROR, "에러", null);
            return ResponseEntity.ok(apiResponse); // 서버 오류 응답
        }

    }

    // 멤버 비밀번호 수정
    @PutMapping("/changePassword")
    public ResponseEntity<ApiResponse<PasswordChangeDTO>> changePassword(@RequestParam int memberId, @RequestBody PasswordChangeDTO passwordChangeDTO) {
        ApiResponse<PasswordChangeDTO> apiResponse;

        try {
            ResultStatus resultStatus = memberService.changePassword(memberId, passwordChangeDTO);
            apiResponse = new ApiResponse<>(ResponseStatus.SUCCESS, "성공", passwordChangeDTO);
            return ResponseEntity.ok(apiResponse);
        } catch (IllegalArgumentException e) {
            apiResponse = new ApiResponse<>(ResponseStatus.FAIL, "실패", null);
            return ResponseEntity.ok(apiResponse);
        } catch (Exception e) {
            apiResponse = new ApiResponse<>(ResponseStatus.ERROR, "에러", null);
            return ResponseEntity.ok(apiResponse);
        }
    }

    // 멤버 삭제
    @DeleteMapping("/delete")
    public ResponseEntity<ApiResponse<Void>> deleteMember(@RequestParam int memberId) {
        ApiResponse<Void> apiResponse;

        try {
            ResultStatus resultStatus = memberService.deleteMember(memberId);
            apiResponse = new ApiResponse<>(ResponseStatus.SUCCESS, "성공", null);
            return ResponseEntity.ok(apiResponse);
        } catch (IllegalArgumentException e) {
            apiResponse = new ApiResponse<>(ResponseStatus.FAIL, "실패: " + e.getMessage(), null);
            return ResponseEntity.ok(apiResponse);
        } catch (Exception e) {
            apiResponse = new ApiResponse<>(ResponseStatus.ERROR, "에러", null);
            return ResponseEntity.ok(apiResponse);
        }
    }

    // 특정 이메일의 회원 정보를 모두 가져오기
    @GetMapping("/member")
    public ResponseEntity<ApiResponse<List<MemberAllDTO>>> getMemberController(@RequestParam String email) {
        try{
            if(validation.emailValidation(email) && email != null) {
                List<MemberAllDTO> member = memberService.GetMember(email);
                return ResponseEntity.ok(new ApiResponse<>(ResponseStatus.SUCCESS, "성공", member));
            }
            else {
                throw new IllegalArgumentException("이메일 형식이 잘못되었거나 이메일이 존재하지 않습니다.");
            }

        }catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse<>(ResponseStatus.ERROR, e.getMessage(), null));
        }

    }

}
