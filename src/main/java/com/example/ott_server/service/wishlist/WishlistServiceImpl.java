package com.example.ott_server.service.wishlist;

import com.example.ott_server.util.WishlistHttpValidation;
import com.example.ott_server.repository.wishlist.WishlistRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WishlistServiceImpl implements WishlistService {

//  위시리스트 리포지토리
    @Autowired
    private WishlistRepository wishlistRepository;

//  요청 본문 & 요청 파라미터 데이터 검증 객체
    private final WishlistHttpValidation validation = new WishlistHttpValidation();


    // 회원 위시리스트에 영화 추가 서비스
    @Transactional
    @Override
    public void userWishAddService(String email, Integer movieID) {
        validation.validateEmailAndMovieId(email, movieID);
        wishlistRepository.userWishlistAdd(email, movieID);
    }

    // 멤버 위시리스트에 영화 추가 서비스
    @Transactional
    @Override
    public void memberWishAddService(String email, Integer movieID) {
        validation.validateEmailAndMovieId(email, movieID);
        wishlistRepository.memberWishlistAdd(email, movieID);
    }

    // 회원 위시리스트에 영화 삭제 서비스
    @Transactional
    @Override
    public void userWishDeleteService(String email, Integer movieID) {
        validation.validateEmailAndMovieId(email, movieID);
        wishlistRepository.userWishlistDelete(email, movieID);
    }

    // 멤버 위시리스트에 영화 삭제 서비스
    @Transactional
    @Override
    public void memberWishDeleteService(String email, Integer movieID) {
        validation.validateEmailAndMovieId(email, movieID);
        wishlistRepository.memberWishlistDelete(email, movieID);
    }
}
