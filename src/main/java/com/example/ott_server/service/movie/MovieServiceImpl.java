package com.example.ott_server.service.movie;

import com.example.ott_server.dto.movie.MovieAllDTO;
import com.example.ott_server.model.movie.Movie;
import com.example.ott_server.repository.movie.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MovieServiceImpl implements MovieService {
    @Autowired
    private MovieRepository movieRepository;

    // 영화 전체 데이터 가져오기
    @Override
    public List<MovieAllDTO> getAllMovie() {
        List<Object[]> results = movieRepository.findAllMovie();
        List<MovieAllDTO> movieAllDTOs = new ArrayList<>();

        for (Object[] result : results) {
            MovieAllDTO dto = new MovieAllDTO(
                    (Integer) result[0],
                    (String) result[1],
                    (String) result[2],
                    (String) result[3],
                    (String) result[4],
                    (String) result[5],
                    (String) result[6],
                    (String) result[7],
                    (String) result[8],
                    (String) result[9],
                    (String) result[10],
                    (String) result[11],
                    (String) result[12]
            );
            movieAllDTOs.add(dto);
        }

        return movieAllDTOs;
    }
}
