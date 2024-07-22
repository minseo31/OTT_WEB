package com.example.ott_server.repository.movie;

import com.example.ott_server.model.movie.Movie;
import com.example.ott_server.query.movie.MovieQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie , Integer> {
    // 영화 전체 데이터 가져오기
    @Query(value = MovieQuery.MOVIE_ALL_QUERY, nativeQuery = true)
    List<Object[]> findAllMovie();
}
