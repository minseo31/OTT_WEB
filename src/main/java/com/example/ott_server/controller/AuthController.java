package com.example.ott_server.controller;

import com.example.ott_server.dto.ApiResponse;
import com.example.ott_server.dto.LoginRequestDTO;
import com.example.ott_server.security.JWTUtil;
import com.example.ott_server.status.ResponseStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth") // 로그인 컨트롤러
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<String>> login (@RequestBody LoginRequestDTO loginRequestDTO) {
        ApiResponse<String> apiResponse;
        try {
            // 이메일과 비밀번호를 통해 인증을 시도
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequestDTO.getEmail(), loginRequestDTO.getPassword())
            );

            // 인증에 성공하면 UserDetails 객체를 가져옴
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            System.out.println("Authenticated user: " + userDetails.getUsername());

            // JWT 토큰 생성
            String token = jwtUtil.generateToken(userDetails);
            System.out.println("Generated token for user: " + userDetails.getUsername());

            // ApiResponse 객체 생성
            apiResponse = new ApiResponse<>(ResponseStatus.SUCCESS, "로그인 성공", token);
            return ResponseEntity.ok(apiResponse);

        } catch (UsernameNotFoundException | BadCredentialsException e) {
            // 인증 실패 시 예외 처리
            System.out.println("아이디 없음");
            apiResponse = new ApiResponse<>(ResponseStatus.UNAUTHORIZED, "인증 오류", null);
            return ResponseEntity.ok(apiResponse);
        }
    }

}
