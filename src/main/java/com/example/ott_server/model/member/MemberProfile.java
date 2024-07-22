package com.example.ott_server.model.member;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Data
@NoArgsConstructor
@Table(name = "memberprofile")
public class MemberProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NonNull
    @Column(name = "member_name")
    private String member_name;

    @NonNull
    @Column(name = "member_email", unique = true)
    private String member_email;

    @NonNull
    @Column(name = "member_password")
    private String member_password;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
}
