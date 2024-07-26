package com.example.ott_server.repository.wishlist;

import com.example.ott_server.model.wishlist.Wishlist;
import com.example.ott_server.query.wishlist.WishlistQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface WishlistRepository extends JpaRepository<Wishlist , Integer> {

    // 회원 위시리스트에 영화 추가
    @Modifying
    @Query(value = WishlistQuery.USER_WISHLIST_ADD_QUERY, nativeQuery = true)
    void userWishlistAdd(@Param("email") String email, @Param("movieID") int movieID);

    // 멤버 위시리스트에 영화 추가
    @Modifying
    @Query(value = WishlistQuery.MEMBER_WISHLIST_ADD_QUERY, nativeQuery = true)
    void memberWishlistAdd(@Param("email") String email, @Param("movieID") int movieID);

    // 회원 위시리스트에 영화 삭제
    @Modifying
    @Query(value = WishlistQuery.USER_WISHLIST_DELETE_QUERY, nativeQuery = true)
    void userWishlistDelete(@Param("email") String email, @Param("movieID") int movieID);

    // 멤버 위시리스트에 영화 삭제
    @Modifying
    @Query(value = WishlistQuery.MEMBER_WISHLIST_DELETE_QUERY, nativeQuery = true)
    void memberWishlistDelete(@Param("email") String email, @Param("movieID") int movieID);

    // MemberProfile의 Wishlist 삭제
    @Modifying
    @Query(value = WishlistQuery.MEMBERPROFILE_WISHLIST_ALL_DELETE_QUERY, nativeQuery = true)
    void MemberProfileWishlistAllDelete(@Param("memberProfileId") int memberProfileId);

    // Member의 Wishlist 삭제
    @Modifying
    @Query(value = WishlistQuery.MEMBER_WISHLIST_ALL_DELETE_QUERY, nativeQuery = true)
    void MemberWishlistAllDelete(@Param("memberId") int memberId);

}
