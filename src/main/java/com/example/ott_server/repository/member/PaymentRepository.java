package com.example.ott_server.repository.member;

import com.example.ott_server.model.member.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {
    // memberId 가진 모든 결제 리스트 반환
    Payment findByMemberId(int memberId);
}
