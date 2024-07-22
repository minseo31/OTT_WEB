package com.example.ott_server.repository.member;

import com.example.ott_server.model.member.MemberProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemberProfileRepository extends JpaRepository<MemberProfile, Integer> {
    // memberId 가진 모든 멤버프로필 리스트 반환
    List<MemberProfile> findByMemberId(int memberId);

    MemberProfile findByMemberEmail(String memberEmail);
}
