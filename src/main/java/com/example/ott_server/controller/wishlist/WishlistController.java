package com.example.ott_server.controller.wishlist;


import com.example.ott_server.dto.ApiResponse;
import com.example.ott_server.dto.wishlist.WishlistDTO;
import com.example.ott_server.service.wishlist.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import com.example.ott_server.status.ResponseStatus;

@RestController
@RequestMapping("/wishlist")
@Validated
public class WishlistController {

//  위시리스트 서비스 인스턴스
    @Autowired
    private WishlistService wishlistService;

    // 회원 위시리스트에 영화 추가 컨트롤러
    @PostMapping("/user/add")
    public ResponseEntity<ApiResponse<String>> userWishAddController(@RequestBody WishlistDTO wishlistDTO) {
        try{
            wishlistService.userWishAddService(wishlistDTO.getEmail(), wishlistDTO.getMovieID());
            return ResponseEntity.ok(new ApiResponse<>(ResponseStatus.SUCCESS, "성공", wishlistDTO.getEmail()+"계정의 위시리스트에"+ wishlistDTO.getMovieID()+"영화가 추가 되었습니다."));
        }catch (IllegalArgumentException e) {
            return ResponseEntity.ok(new ApiResponse<>(ResponseStatus.FAIL, e.getMessage(), null));
        }catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse<>(ResponseStatus.ERROR, e.getMessage(), null));
        }
    }

    // 멤버 위시리스트에 영화 추가 컨트롤러
    @PostMapping("/member/add")
    public ResponseEntity<ApiResponse<String>> memberWishAddController(@RequestBody WishlistDTO wishlistDTO) {
        try{
            wishlistService.memberWishAddService(wishlistDTO.getEmail(), wishlistDTO.getMovieID());
            return ResponseEntity.ok(new ApiResponse<>(ResponseStatus.SUCCESS, "성공",wishlistDTO.getEmail()+" 멤버의 위시리스트에 "+ wishlistDTO.getMovieID()+" 영화가 추가 되었습니다."));
        }catch (IllegalArgumentException e) {
            return ResponseEntity.ok(new ApiResponse<>(ResponseStatus.FAIL, e.getMessage(), null));
        }catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse<>(ResponseStatus.ERROR, e.getMessage(), null));
        }
    }

    // 회원 위시리스트에 영화 삭제 컨트롤러
    @DeleteMapping("/user/delete")
    public ResponseEntity<ApiResponse<String>> userWishDeleteController(@RequestParam String email, @RequestParam int movieID) {
        try{
            wishlistService.userWishDeleteService(email, movieID);
            return ResponseEntity.ok(new ApiResponse<>(ResponseStatus.SUCCESS, "성공",email+" 계정의 위시리스트에"+ movieID+" 영화가 삭제 되었습니다."));
        }catch (IllegalArgumentException e) {
            return ResponseEntity.ok(new ApiResponse<>(ResponseStatus.FAIL, e.getMessage(), null));
        }catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse<>(ResponseStatus.ERROR, e.getMessage(), null));
        }
    }

    // 멤버 위시리스트에 영화 삭제 컨트롤러
    @DeleteMapping("/member/delete")
    public ResponseEntity<ApiResponse<String>> memberWishDeleteController(@RequestParam String email, @RequestParam int movieID) {
        try{
            wishlistService.memberWishDeleteService(email, movieID);
            return ResponseEntity.ok(new ApiResponse<>(ResponseStatus.SUCCESS, "성공",email+" 멤버의 위시리스트에"+ movieID+" 영화가 삭제 되었습니다."));
        }catch (IllegalArgumentException e) {
            return ResponseEntity.ok(new ApiResponse<>(ResponseStatus.FAIL, e.getMessage(), null));
        }catch (Exception e) {
            return ResponseEntity.ok(new ApiResponse<>(ResponseStatus.ERROR, e.getMessage(), null));
        }
    }


}
