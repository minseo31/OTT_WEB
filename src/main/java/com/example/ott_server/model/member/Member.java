package com.example.ott_server.model.member;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NonNull
    @Column(name = "name")
    private String name;

    @NonNull
    @Column(name = "email",unique = true)
    private String email;

    @NonNull
    @Column(name = "password")
    private String password;

    @ManyToOne
    @JoinColumn(name = "Membership_id")
    private Membership membership;
}
