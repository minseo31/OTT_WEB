package com.example.ott_server.query.wishlist;


public class WishlistQuery {

//   회원 위시리스트에 영화 추가 쿼리
    public static final String USER_WISHLIST_ADD_QUERY =
        "INSERT INTO Wishlist (member_id, member_profile_id, movie_id) " +
                "SELECT m.id, NULL, :movieID FROM Member m WHERE m.email = :email";

//  멤버 위시리스트에 영화 추가 쿼리
    public static final String MEMBER_WISHLIST_ADD_QUERY =
        "INSERT INTO Wishlist (member_id, member_profile_id, movie_id) " +
                "SELECT NULL, mp.id, :movieID FROM MemberProfile mp WHERE mp.member_email = :email";

//  회원 위시리스트 영화 삭제 쿼리
    public static final String USER_WISHLIST_DELETE_QUERY =
        "DELETE w FROM Wishlist w " +
                "JOIN Member m ON w.member_id = m.id " +
                "WHERE m.email = :email " +
                "AND w.movie_id = :movieID ";

//  멤버 위시리스트 영화 삭제 쿼리
    public static final String MEMBER_WISHLIST_DELETE_QUERY =
            "DELETE w FROM Wishlist w " +
                    "JOIN MemberProfile mp ON w.member_profile_id = mp.id " +
                    "WHERE mp.member_email = :email " +
                    "AND w.movie_id = :movieID ";

    // 멤버 삭제시 위시리스트 삭제
    public static final String MEMBER_WISHLIST_ALL_DELETE_QUERY =
            "DELETE FROM Wishlist w WHERE w.member_id = :memberId";

    // 멤버프로필 삭제시 위시리스트 삭제
    public static final String MEMBERPROFILE_WISHLIST_ALL_DELETE_QUERY =
            "DELETE FROM Wishlist w WHERE w.member_profile_id = :memberProfileId";


}
