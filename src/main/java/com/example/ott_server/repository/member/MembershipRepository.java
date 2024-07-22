package com.example.ott_server.repository.member;

import com.example.ott_server.model.member.Membership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface MembershipRepository extends JpaRepository<Membership, Integer> {
    // 멤버십 등급
    Membership findByLevel(String level);
}
