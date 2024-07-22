package com.example.ott_server.query.movie;

import lombok.NoArgsConstructor;

public class MovieQuery {
//   모든 영화 데이터 가져오는 쿼리문
public static final String MOVIE_ALL_QUERY =
        "SELECT " +
                "mo.id AS movie_id, " +
                "mo.title AS movie_title, " +
                "mo.age_rating AS age_rating, " +
                "mo.runtime AS runtime, " +
                "mo.rating AS movie_rating, " +
                "mo.teaser_url AS teaser_url, " +
                "mo.poster_img AS poster_image, " +
                "mo.plot_summary AS plot_summary, " +
                "mo.release_date AS release_date, " +
                "GROUP_CONCAT(DISTINCT d.name SEPARATOR ', ') AS director_names, " +
                "GROUP_CONCAT(DISTINCT pc.name SEPARATOR ', ') AS production_company_names, " +
                "GROUP_CONCAT(DISTINCT g.name SEPARATOR ', ') AS genre_names, " +
                "GROUP_CONCAT(DISTINCT c.name SEPARATOR ', ') AS category_names " +
                "FROM Movie mo " +
                "LEFT JOIN MovieDirector md ON mo.id = md.movie_id " +
                "LEFT JOIN Director d ON md.director_id = d.id " +
                "LEFT JOIN MovieProduction mp ON mo.id = mp.movie_id " +
                "LEFT JOIN ProductionCompany pc ON mp.production_company_id = pc.id " +
                "LEFT JOIN MovieGenre mg ON mo.id = mg.movie_id " +
                "LEFT JOIN Genre g ON mg.genre_id = g.id " +
                "LEFT JOIN MovieCategory mc ON mo.id = mc.movie_id " +
                "LEFT JOIN Category c ON mc.category_id = c.id " +
                "GROUP BY mo.id";
}