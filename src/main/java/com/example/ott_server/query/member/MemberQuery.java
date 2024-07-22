package com.example.ott_server.query.member;

public class MemberQuery {
//  특정 이메일을 가진 회원의 모든 정보 데이터 조회 쿼리
public static final String MEMBER_EMAIL_QUERY =
        "SELECT " +
                "m.id AS member_id, " +
                "m.email AS member_email, " +
                "NULL AS profile_id, " +
                "m.name AS profile_member_name, " +
                "m.email AS profile_member_email, " +
                "w.id AS wishlist_id, " +
                "w.movie_id, " +
                "mv.title, " +
                "mv.age_rating, " +
                "mv.runtime, " +
                "mv.rating, " +
                "mv.teaser_url, " +
                "mv.poster_img, " +
                "mv.plot_summary, " +
                "mv.release_date, " +
                "GROUP_CONCAT(DISTINCT d.name ORDER BY d.name SEPARATOR ', ') AS directors, " +
                "GROUP_CONCAT(DISTINCT pc.name ORDER BY pc.name SEPARATOR ', ') AS production_companies, " +
                "GROUP_CONCAT(DISTINCT g.name ORDER BY g.name SEPARATOR ', ') AS genres, " +
                "GROUP_CONCAT(DISTINCT c.name ORDER BY c.name SEPARATOR ', ') AS categories, " +
                "ms.level AS membership_level, " +
                "ms.amount AS membership_amount, " +
                "p.card_number, " +
                "CAST(p.expiry_date AS CHAR) AS expiry_date, " +
                "CAST(p.payment_date AS CHAR) AS payment_date, " +
                "p.card_name, " +
                "p.amount AS payment_amount " +
        "FROM " +
                "Member m " +
                "LEFT JOIN " +
                "Wishlist w ON m.id = w.member_id " +
                "LEFT JOIN " +
                "Movie mv ON w.movie_id = mv.id " +
                "LEFT JOIN " +
                "MovieDirector md ON mv.id = md.movie_id " +
                "LEFT JOIN " +
                "Director d ON md.director_id = d.id " +
                "LEFT JOIN " +
                "MovieProduction mpd ON mv.id = mpd.movie_id " +
                "LEFT JOIN " +
                "ProductionCompany pc ON mpd.production_company_id = pc.id " +
                "LEFT JOIN " +
                "MovieGenre mg ON mv.id = mg.movie_id " +
                "LEFT JOIN " +
                "Genre g ON mg.genre_id = g.id " +
                "LEFT JOIN " +
                "MovieCategory mc ON mv.id = mc.movie_id " +
                "LEFT JOIN " +
                "Category c ON mc.category_id = c.id " +
                "LEFT JOIN " +
                "Membership ms ON m.membership_id = ms.id " +
                "LEFT JOIN " +
                "Payment p ON m.id = p.member_id " +
        "WHERE " +
                "m.email = :email " +
        "GROUP BY " +
                "m.id, " +
                "w.id, " +
                "mv.id, " +
                "ms.level, " +
                "ms.amount, " +
                "p.card_number, " +
                "p.expiry_date, " +
                "p.payment_date, " +
                "p.card_name, " +
                "p.amount " +
        "UNION " +
        "SELECT " +
                "m.id AS member_id, " +
                "m.email AS member_email, " +
                "mp.id AS profile_id, " +
                "mp.member_name AS profile_member_name, " +
                "mp.member_email AS profile_member_email, " +
                "w.id AS wishlist_id, " +
                "w.movie_id, " +
                "mv.title, " +
                "mv.age_rating, " +
                "mv.runtime, " +
                "mv.rating, " +
                "mv.teaser_url, " +
                "mv.poster_img, " +
                "mv.plot_summary, " +
                "mv.release_date, " +
                "GROUP_CONCAT(DISTINCT d.name ORDER BY d.name SEPARATOR ', ') AS directors, " +
                "GROUP_CONCAT(DISTINCT pc.name ORDER BY pc.name SEPARATOR ', ') AS production_companies, " +
                "GROUP_CONCAT(DISTINCT g.name ORDER BY g.name SEPARATOR ', ') AS genres, " +
                "GROUP_CONCAT(DISTINCT c.name ORDER BY c.name SEPARATOR ', ') AS categories, " +
                "ms.level AS membership_level, " +
                "ms.amount AS membership_amount, " +
                "p.card_number, " +
                "CAST(p.expiry_date AS CHAR) AS expiry_date, " +
                "CAST(p.payment_date AS CHAR) AS payment_date, " +
                "p.card_name, " +
                "p.amount AS payment_amount " +
        "FROM " +
                "Member m " +
                "LEFT JOIN " +
                "MemberProfile mp ON m.id = mp.member_id " +
                "LEFT JOIN " +
                "Wishlist w ON mp.id = w.member_profile_id " +
                "LEFT JOIN " +
                "Movie mv ON w.movie_id = mv.id " +
                "LEFT JOIN " +
                "MovieDirector md ON mv.id = md.movie_id " +
                "LEFT JOIN " +
                "Director d ON md.director_id = d.id " +
                "LEFT JOIN " +
                "MovieProduction mpd ON mv.id = mpd.movie_id " +
                "LEFT JOIN " +
                "ProductionCompany pc ON mpd.production_company_id = pc.id " +
                "LEFT JOIN " +
                "MovieGenre mg ON mv.id = mg.movie_id " +
                "LEFT JOIN " +
                "Genre g ON mg.genre_id = g.id " +
                "LEFT JOIN " +
                "MovieCategory mc ON mv.id = mc.movie_id " +
                "LEFT JOIN " +
                "Category c ON mc.category_id = c.id " +
                "LEFT JOIN " +
                "Membership ms ON m.membership_id = ms.id " +
                "LEFT JOIN " +
                "Payment p ON m.id = p.member_id " +
        "WHERE " +
                "m.email = :email " +
        "GROUP BY " +
                "m.id, " +
                "mp.id, " +
                "w.id, " +
                "mv.id, " +
                "ms.level, " +
                "ms.amount, " +
                "p.card_number, " +
                "p.expiry_date, " +
                "p.payment_date, " +
                "p.card_name, " +
                "p.amount";
}
