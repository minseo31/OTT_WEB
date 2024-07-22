package com.example.ott_server.service.member;

import com.example.ott_server.dto.PasswordChangeDTO;
import com.example.ott_server.dto.member.MemberAllDTO;
import com.example.ott_server.dto.member.MemberRegisterDTO;
import com.example.ott_server.status.ResultStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MemberService {
    // 전체 이메일
    List<String> getAllEmails();

    // 회원가입시 계정 추가
    ResultStatus addMemberRegister(MemberRegisterDTO memberRegisterDTO);

    // 멤버 비밀번호 수정
    ResultStatus changePassword(int memberId, PasswordChangeDTO passwordChangeDTO);

    // 멤버 삭제
    ResultStatus deleteMember(int memberId);

    //  특정 이메일의 회원 정보를 모두 가져오기
    List<MemberAllDTO> GetMember(String email);
}
