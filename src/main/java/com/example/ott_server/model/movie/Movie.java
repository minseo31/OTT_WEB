package com.example.ott_server.model.movie;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "movie") // 테이블 이름 명시
public class Movie {
    @Id
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "age_rating")
    private String age_rating;

    @Column(name = "runtime")
    private String runtime;

    @Column(name = "rating")
    private String rating;

    @Column(name = "teaser_url")
    private String teaser_url;

    @Column(name = "poster_img")
    private String poster_img;

    @Column(name = "plot_summary", length = 1000)
    private String plot_summary;

    @Column(name = "release_date")
    private String release_date;
}