package com.example.ott_server.service.wishlist;

import com.example.ott_server.model.wishlist.Wishlist;
import org.springframework.stereotype.Service;

@Service
public interface WishlistService {
    // 회원 위시리스트에 영화 추가 서비스
    void userWishAddService(String email, Integer movieID);

    // 멤버 위시리스트에 영화 추가 서비스
    void memberWishAddService(String email, Integer movieID);

    // 회원 위시리스트에 영화 삭제 서비스
    void userWishDeleteService(String email, Integer movieID);

    // 멤버 위시리스트에 영화 삭제 서비스
    void memberWishDeleteService(String email, Integer movieID);
}
