package com.example.ott_server.dto.member;

import com.example.ott_server.model.member.Member;
import com.example.ott_server.model.member.Payment;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
public class MemberRegisterDTO {
    @NonNull
    private String name;

    @NonNull
    private String email;

    @NonNull
    private String password;

    @NonNull
    private String card_number;

    @NonNull
    private String expiry_date;

    @NonNull
    private String card_name;

    @NonNull
    private BigDecimal amount;

    public MemberRegisterDTO(Member member, Payment payment) {
        this.name = member.getName();
        this.email = member.getEmail();
        this.password = member.getPassword();
        this.card_number = payment.getCard_number();
        this.expiry_date = payment.getExpiry_date();
        this.card_name = payment.getCard_name();
        this.amount = payment.getAmount();
    }
}
