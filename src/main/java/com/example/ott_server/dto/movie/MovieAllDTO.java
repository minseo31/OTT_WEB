package com.example.ott_server.dto.movie;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// 영화 전체 가져오기 데이터 형식

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MovieAllDTO {
    @NotNull(message = "영화 ID는 필수입니다.")
    private Integer movieId; // 영화 id

    @NotBlank(message = "영화 이름은 필수입니다.")
    private String movieTitle; // 영화 이름

    @NotBlank(message = "연령 제한은 필수입니다.")
    private String ageRating; // 영화 연령제한

    @NotBlank(message = "영화 런타임은 필수입니다.")
    private String runtime; // 영화 런타임

    @NotBlank(message = "영화 평점은 필수입니다.")
    private String movieRating; // 영화 평점

    @NotBlank(message = "티저 URL은 필수입니다.")
    @Pattern(regexp = "^(http|https)://.*$", message = "유효한 URL 형식이어야 합니다.")
    private String teaserUrl; // 영화 티저 url

    @NotBlank(message = "포스터 이미지는 필수입니다.")
    @Pattern(regexp = "^/image/post/.*\\.jpg$", message = "포스터 이미지는 '/image/post/'로 시작하고 '.jpg'로 끝나야 합니다.")
    private String posterImage; // 영화 포스터

    @Size(max = 1000, message = "플롯 요약은 최대 1000자까지 가능합니다.")
    private String plotSummary; // 영화 플롯

    @NotBlank(message = "개봉일은 필수입니다.")
    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "개봉일은 'YYYY-MM-DD' 형식이어야 합니다.")
    private String releaseDate; // 영화 개봉일

    @NotBlank(message = "감독 이름은 필수입니다.")
    private String directorNames; // 영화 감독

    @NotBlank(message = "제작사는 필수입니다.")
    private String productionCompanyNames; // 영화 제작사

    @NotBlank(message = "장르는 필수입니다.")
    private String genreNames; // 영화 장르

    @NotBlank(message = "카테고리는 필수입니다.")
    private String categoryNames; // 영화 카테고리
}
