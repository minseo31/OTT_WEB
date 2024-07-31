package com.example.ott_server.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class JWTUtil {

    @Value("${jwt.secret}")
    private String secret;

    // SecretKey를 동적으로 생성하는 메서드
    private SecretKey getSigningKey() {
        return Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
    }
    // JWT 토큰 생성 (UserDetails)
    public String generateToken(UserDetails userDetails) {
        String username = userDetails.getUsername();
        System.out.println("Generating token for user: " + username);

        return Jwts.builder()
                .setIssuedAt(new Date(System.currentTimeMillis())) // 토큰 발행 시간 설정
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24)) // 토큰 유효기간 설정 (24시간)
                .setSubject(userDetails.getUsername()) // 토큰의 subject 설정 (사용자 이메일)
                .claim("email", userDetails.getUsername()) // 추가 클레임 설정
                .signWith(getSigningKey(), SignatureAlgorithm.HS512) // 비밀 키로 서명
                .compact(); // 토큰 문자열로 변환
    }

    // 토큰에서 사용자 이메일 추출
    public String extractUserEmail(String token) {
        System.out.println("Extracting email from token: " + token);
        return Jwts.parser()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // JWT 토큰의 유효성 검증
    public boolean validToken(String token) {
        try {
            Jwts.parser()
                    .setSigningKey(getSigningKey())
                    .build()
                    .parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    // JWT 토큰에서 클레임 추출 메서드
    public Claims extractToken(String token) {
        return Jwts.parser()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    // 토큰 만료 여부 확인
    public boolean isTokenExpired(String token) {
        return extractToken(token).getExpiration().before(new Date());
    }

    // 토큰의 유효성 검증 메서드
    public boolean validateToken(String token, UserDetails userDetails) {
        final String email = extractUserEmail(token); // 토큰에서 사용자 이메일 추출
        return (email.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}
