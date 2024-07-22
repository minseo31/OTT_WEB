package com.example.ott_server.service;

import com.example.ott_server.model.member.Member;
import com.example.ott_server.repository.member.MemberProfileRepository;
import com.example.ott_server.repository.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MemberLoginServiceImpl implements UserDetailsService {

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private MemberProfileRepository memberProfileRepository;

    // 로그인시 일치하는 이메일이 있는지 확인
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // Member 테이블에서 이메일을 기반으로 사용자 검색
        Member member = memberRepository.findByEmail(email);
        if(member != null) {
            System.out.println("Member found: " + member.getEmail());
            return new User(member.getEmail(), member.getPassword(), new ArrayList<>());
        }

//        // MemberProfile 테이블에서 이메일을 기반으로 사용자 검색
//        MemberProfile memberProfile = memberProfileRepository.findByMemberEmail(email);
//        if(memberProfile != null) {
//            System.out.println("MemberProfile found: " + memberProfile.getMember_email());
//            return new User(memberProfile.getMember_email(), memberProfile.getMember_password(), new ArrayList<>());
//        }

        throw new UsernameNotFoundException("Not fount email : " + email);
    }
}
