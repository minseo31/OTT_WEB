package com.example.ott_server.dto.wishlist;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// 위시리스트 DTO (서버 요청 본문의 데이터 형식)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class WishlistDTO {
    @NotBlank(message = "이메일은 필수입니다.")
    @Email(message = "유효한 이메일 형식이어야 합니다.")
    private String email; // 회원 이메일

    @NotNull(message = "영화 ID는 필수입니다.")
    private Integer movieID; // 영화 ID
}
