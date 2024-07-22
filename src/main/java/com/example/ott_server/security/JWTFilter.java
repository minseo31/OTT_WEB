package com.example.ott_server.security;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Component
public class JWTFilter extends OncePerRequestFilter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JWTUtil jwtUtil;

    private List<String> excludeURLs = Arrays.asList("/auth/login", "/member/add");

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        // 요청 URI가 excludeURLs에 포함되어 있는지 확인
        if (excludeURLs.stream().anyMatch(uri -> uri.equals(request.getRequestURI()))) {
            chain.doFilter(request, response);
            return;
        }

        // 요청 헤더에서 Authorization 헤더를 가져옴.
        final String requestTokenHeader = request.getHeader("Authorization");

        String email = null;
        String jwtToken = null;

        // Authorization 헤더가 존재하고, "Bearer "로 시작하는지 확인
        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            // "Bearer " 이후의 토큰 문자열을 추출합니다.
            jwtToken = requestTokenHeader.substring(7);
            try {
                // JWT 토큰에서 이메일(email)을 추출
                email = jwtUtil.extractUserEmail(jwtToken);
            } catch (IllegalArgumentException e) {
                System.out.println("Unable to get JWT Token");
            } catch (ExpiredJwtException e) {
                System.out.println("JWT Token has expired");
            }
        }

        // email이 추출되었고, 현재 SecurityContext에 인증 정보가 없는 경우
        if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            // UserDetailsService를 사용하여 사용자 세부 정보를 로드합니다.
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(email);

            // JWT 토큰이 유효한지 검증
            if (jwtUtil.validateToken(jwtToken, userDetails)) {
                // 유효한 경우 UsernamePasswordAuthenticationToken 객체를 생성하여 사용자 정보를 설정
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                // SecurityContext에 인증 정보를 설정
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        }
        // 다음 필터를 실행
        chain.doFilter(request, response);
    }
}
