package com.example.ott_server.model.member;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@Table(name = "payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "card_number")
    private String card_number;

    @Column(name = "expiry_date")
    private String expiry_date;

    @Column(name = "payment_date")
    private LocalDate payment_date;

    @Column(name = "card_name")
    private String card_name;

    @Column(name = "amount")
    private BigDecimal amount;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
}
