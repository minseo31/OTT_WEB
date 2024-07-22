package com.example.ott_server.dto.member;

import jakarta.persistence.Column;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;

// 해당 이메일의 회원 정보 데이터를 가져오는 형식
@Data
@AllArgsConstructor
public class MemberAllDTO {
    @NotNull(message = "회원 ID는 필수입니다.")
    private Integer  id; // 회원 id

    @NotBlank(message = "회원 이메일은 필수입니다.")
    @Email(message = "유효한 이메일 형식이어야 합니다.")
    private String email; // 회원 이메일

    @NotNull(message = "프로필 ID는 필수입니다.")
    private Integer  profile_id; // 회원의 멤버 id

    @NotBlank(message = "회원 이름은 필수입니다.")
    private String member_name; // 회원의 멤버 이름

    @NotBlank(message = "회원 멤버 이메일은 필수입니다.")
    @Email(message = "유효한 이메일 형식이어야 합니다.")
    private String member_email; // 회원의 멤버 이메일

    private Integer  wishlist_id; // 위시리스트 id

    private Integer  movie_id; // 위시리스트의 영화 id

    private String title; // 위시리스트의 영화 이름

    private String age_rating; // 위시리스트의 영화 나이제한

    private String runtime; // 위시리스트의 영화 런타임

    private String rating; // 위시리스트의 영화 평점

    private String teaser_url; // 위시리스트의 티저 url

    private String poster_img; // 위시리스트의 영화 포스터

    @Size(max = 1000, message = "플롯 요약은 1000자 이내여야 합니다.")
    private String plot_summary; // 위시리스트의 영화 플롯

    private String release_date; // 위시리스트의 영화 개봉일

    private String directors; // 위시리스트의 영화 감독

    private String production_companies; // 위시리스트의 영화 제작사

    private String genres; // 위시리스트의 영화 장르

    private String categories; // 위시리스트의 영화 카테고리

    @NotBlank(message = "회원 멤버십 등급은 필수입니다.")
    private String membership_level; // 회원 멤버쉽 등급

    @Positive(message = "회원 멤버십 가격은 양수여야 합니다.")
    private Double membership_amount; // 회원 멤버쉽 가격

    @NotBlank(message = "회원 카드 번호는 필수입니다.")
    @Pattern(regexp = "^\\d{4}-\\d{4}-\\d{4}-\\d{4}$", message = "카드 번호는 4자리 숫자가 '-'로 구분되어야 합니다.")
    private String card_number; // 회원 카드 번호

    @NotBlank(message = "회원 카드 유효기간은 필수입니다.")
    private String expiry_date; // 회원 카드 유효기간

    @NotBlank(message = "회원 결제일은 필수입니다.")
    private String payment_date; // 회원 결제일

    @NotBlank(message = "카드 소유자명은 필수입니다.")
    private String card_name; // 카드 소유자명

    @Positive(message = "결제 금액은 양수여야 합니다.")
    private Double payment_amount; // 결제 금액
}