package com.example.ott_server.repository.member;

import com.example.ott_server.model.member.Member;
import com.example.ott_server.query.member.MemberQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {
    // 이메일 찾기
    Member findByEmail(String email);

    // 특정 이메일의 회원 정보를 모두 가져오기
    @Query(value = MemberQuery.MEMBER_EMAIL_QUERY, nativeQuery = true)
    List<Object[]> findByMember(@Param("email") String email);
}
