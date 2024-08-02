package com.example.ott_server.controller.memberprofile;

import com.example.ott_server.dto.ApiResponse;
import com.example.ott_server.dto.PasswordChangeDTO;
import com.example.ott_server.dto.memberprofile.MemberProfileDTO;
import com.example.ott_server.service.memberprofile.MemberProfileService;
import com.example.ott_server.status.ResponseStatus;
import com.example.ott_server.status.ResultStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/memberprofile")
public class MemberProfileController {

    // 멤버프로필 서비스 인스턴스
    @Autowired
    private MemberProfileService memberProfileService;

    // 멤버프로필 추가
    @PostMapping("/add")
    public ResponseEntity<ApiResponse<MemberProfileDTO>> addMemberProFile(@RequestBody MemberProfileDTO memberProfileDTO) {
        ApiResponse<MemberProfileDTO> apiResponse;

        try {
            int memberId = memberProfileDTO.getMember_id();
            ResultStatus resultStatus = memberProfileService.addMemberProfile(memberProfileDTO, memberId);

            if (resultStatus == ResultStatus.SUCCESS) {
                apiResponse = new ApiResponse<>(ResponseStatus.SUCCESS, "성공", memberProfileDTO);
                return ResponseEntity.ok(apiResponse);
            } else if (resultStatus == ResultStatus.FAIL) {
                apiResponse = new ApiResponse<>(ResponseStatus.FAIL, "멤버쉽 제한 초과", null);
                return ResponseEntity.badRequest().body(apiResponse);
            } else {
                apiResponse = new ApiResponse<>(ResponseStatus.ERROR, "에러", null);
                return ResponseEntity.status(500).body(apiResponse);
            }
        } catch (IllegalArgumentException e) {
            apiResponse = new ApiResponse<>(ResponseStatus.FAIL, "실패", null);
            return ResponseEntity.ok(apiResponse);
        } catch (Exception e) {
            apiResponse = new ApiResponse<>(ResponseStatus.ERROR, "에러", null);
            return ResponseEntity.ok(apiResponse);
        }
    }

    // 멤버프로필 삭제
    @DeleteMapping("/delete")
    public ResponseEntity<ApiResponse<Void>> deleteMemberProfileByMemberId(@RequestParam int memberProfileId) {
        try {
            memberProfileService.deleteMemberProfileById(memberProfileId);
            ApiResponse<Void> apiResponse = new ApiResponse<>(ResponseStatus.SUCCESS, "성공", null);
            return ResponseEntity.ok(apiResponse);
        } catch (Exception e) {
            ApiResponse<Void> apiResponse = new ApiResponse<>(ResponseStatus.ERROR, "에러", null);
            return ResponseEntity.ok(apiResponse);
        }
    }

    // 멤버프로필 비밀번호 수정
    @PutMapping("/changepassword")
    public ResponseEntity<ApiResponse<PasswordChangeDTO>> changePassword(@RequestParam int memberProfileId, @RequestBody PasswordChangeDTO passwordChangeDTO) {
        ApiResponse<PasswordChangeDTO> apiResponse;

        try {
            ResultStatus resultStatus = memberProfileService.changePassword(memberProfileId, passwordChangeDTO);
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


}
