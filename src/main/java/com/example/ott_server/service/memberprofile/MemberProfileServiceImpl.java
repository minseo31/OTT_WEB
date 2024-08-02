package com.example.ott_server.service.memberprofile;

import com.example.ott_server.dto.PasswordChangeDTO;
import com.example.ott_server.dto.memberprofile.MemberProfileDTO;
import com.example.ott_server.model.member.Member;
import com.example.ott_server.model.member.MemberProfile;
import com.example.ott_server.repository.member.MemberProfileRepository;
import com.example.ott_server.repository.member.MemberRepository;
import com.example.ott_server.repository.wishlist.WishlistRepository;
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

    // 위시리스트 리포지토리
    @Autowired
    private WishlistRepository wishlistRepository;

    // 멤버프로필 추가
    @Override
    @Transactional
    public ResultStatus addMemberProfile(MemberProfileDTO memberProfileDTO, int memberId) {
        try {
            // 멤버 조회
            Optional<Member> optionalMember = memberRepository.findById(memberId);

            // 멤버가 존재하지 않으면 예외 발생
            Member member = optionalMember.orElseThrow(() -> new IllegalArgumentException("Member not found"));

            // 현재 멤버쉽에 따른 회원 수 제한
            int membershipId = member.getMembership().getId();
            long currentMemberProfileCount = memberProfileRepository.countByMemberId(memberId);

            if ((membershipId == 1 && currentMemberProfileCount >= 2) ||
                    (membershipId == 2 && currentMemberProfileCount >= 2) ||
                    (membershipId == 3 && currentMemberProfileCount >= 4)) {
                return ResultStatus.FAIL;
            }

            MemberProfile memberProfile = new MemberProfile();
            memberProfile.setMember_name(memberProfileDTO.getMember_name());
            memberProfile.setMember_email(memberProfileDTO.getMember_email());

            // 비밀번호를 암호화하지 않고 저장
            memberProfile.setMember_password(memberProfileDTO.getMember_password());

            memberProfile.setMember(member);

            memberProfileRepository.save(memberProfile);
            return ResultStatus.SUCCESS;
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return ResultStatus.FAIL; // 예외 발생 시 실패 상태 반환
        }
    }

    // 멤버프로필 삭제
    @Override
    @Transactional
    public ResultStatus deleteMemberProfileById(int memberProfileId) {
        try {
            Optional<MemberProfile> optionalMemberProfile = memberProfileRepository.findById(memberProfileId);

            // MemberProfile 존재 확인
            if (optionalMemberProfile.isPresent()) {
                // Wishlist에서 해당 memberProfileId와 관련된 데이터 모두 삭제
                wishlistRepository.MemberProfileWishlistAllDelete(memberProfileId);

                // MemberProfile 삭제
                memberProfileRepository.deleteById(memberProfileId);

                return ResultStatus.SUCCESS;
            } else {
                throw new IllegalArgumentException("존재하지 않는 회원 프로필입니다.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResultStatus.FAIL;
        }
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
