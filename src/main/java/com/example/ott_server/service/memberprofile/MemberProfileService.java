package com.example.ott_server.service.memberprofile;

import com.example.ott_server.dto.PasswordChangeDTO;
import com.example.ott_server.dto.memberprofile.MemberProfileDTO;
import com.example.ott_server.model.member.MemberProfile;
import com.example.ott_server.status.ResultStatus;

public interface MemberProfileService {
    // 멤버프로필 추가
    ResultStatus addMemberProfile(MemberProfileDTO memberProfileDTO, int memberId);

    // 멤버프로필 삭제
    ResultStatus deleteMemberProfileById(int memberProfileId);

    // 멤버프로필 비밀번호 수정
    ResultStatus changePassword(int memberProfileId, PasswordChangeDTO passwordChangeDTO);
}
