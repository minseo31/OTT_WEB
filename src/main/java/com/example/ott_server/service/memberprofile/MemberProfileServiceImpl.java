package com.example.ott_server.service.memberprofile;

import com.example.ott_server.dto.PasswordChangeDTO;
import com.example.ott_server.dto.memberprofile.MemberProfileDTO;
import com.example.ott_server.model.member.Member;
import com.example.ott_server.model.member.MemberProfile;
import com.example.ott_server.repository.member.MemberProfileRepository;
import com.example.ott_server.repository.member.MemberRepository;
import com.example.ott_server.status.ResultStatus;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberProfileServiceImpl implements MemberProfileService{

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private MemberProfileRepository memberProfileRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // 멤버프로필 추가
    @Override
    @Transactional
    public ResultStatus addMemberProfile(MemberProfileDTO memberProfileDTO, int memberId) {
        Member member = new Member();
        member.setId(memberId);

        MemberProfile memberProfile = new MemberProfile();
        memberProfile.setMember_name(memberProfileDTO.getMember_name());
        memberProfile.setMember_email(memberProfileDTO.getMember_email());

        // 비밀번호를 암호화하지 않고 저장
        memberProfile.setMember_password(memberProfileDTO.getMember_password());

        memberProfile.setMember(member);

        memberProfileRepository.save(memberProfile);
        return ResultStatus.SUCCESS;
    }

    // 멤버프로필 삭제
    @Override
    @Transactional
    public ResultStatus deleteMemberProfileById(int memberProfileId) {
        memberProfileRepository.deleteById(memberProfileId);

        return ResultStatus.SUCCESS;
    }

    // 멤버프로필 비밀번호 수정
    @Override
    @Transactional
    public ResultStatus changePassword(int memberProfileId, PasswordChangeDTO passwordChangeDTO) {
        Optional<MemberProfile> optionalMemberProfile = memberProfileRepository.findById(memberProfileId);

        if (!optionalMemberProfile.isPresent()) {
            throw new IllegalArgumentException("존재하지 않는 회원입니다.");
        }

        MemberProfile memberProfile = optionalMemberProfile.get();

        // 새로운 비밀번호 설정
        memberProfile.setMember_password(passwordChangeDTO.getNewPassword());
        memberProfileRepository.save(memberProfile);

        return ResultStatus.SUCCESS;
    }
}
