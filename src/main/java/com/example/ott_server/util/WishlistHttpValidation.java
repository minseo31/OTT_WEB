package com.example.ott_server.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.regex.Pattern;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WishlistHttpValidation {
    private String email;
    private Integer movieID;


//  이메일 형식 검증
    public boolean emailValidation(String email) {
        return Pattern.matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", email);
    }

    // 이메일과 영화 ID 검증 메서드
    public void validateEmailAndMovieId(String email, Integer movieID) {
        if (email == null || movieID == null) {
            throw new IllegalArgumentException("이메일 또는 영화 ID가 존재하지 않습니다.");
        }
        if (!emailValidation(email)) {
            throw new IllegalArgumentException("유효하지 않은 이메일 형식입니다.");
        }
    }
}
