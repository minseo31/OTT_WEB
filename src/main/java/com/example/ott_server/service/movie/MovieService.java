package com.example.ott_server.service.movie;

import com.example.ott_server.dto.movie.MovieAllDTO;
import com.example.ott_server.model.movie.Movie;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MovieService  {
    // 영화 전체 데이터 가져오기
    List<MovieAllDTO> getAllMovie();
}
