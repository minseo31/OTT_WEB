package com.example.ott_server.controller.movie;

import com.example.ott_server.dto.ApiResponse;
import com.example.ott_server.dto.movie.MovieAllDTO;
import com.example.ott_server.service.movie.MovieService;
import com.example.ott_server.status.ResponseStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/movie")
public class GetAllMovieController {
//  서비스 인터페이스
    @Autowired
    private MovieService movieService;

//   영화 전체 데이터 가져오기
    @GetMapping("/all")
    public ResponseEntity<ApiResponse<List<MovieAllDTO>>> getAllMovieController() {
        try{
            List<MovieAllDTO> movieList = movieService.getAllMovie();
            return ResponseEntity.ok(new ApiResponse<>(ResponseStatus.SUCCESS , "성공", movieList));

        } catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse<>(ResponseStatus.ERROR , e.getMessage(), null));
        }
    }
}
