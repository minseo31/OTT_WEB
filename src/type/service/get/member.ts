import { CategoryFilterType } from "../../util/categorilFilterType";

// 멤버 데이터 요청 타입
export type MemberResponseType = {
  status: string;
  message: string;
  data: MemberDataType[];
};

// 멤버 데이터 타입
export type MemberDataType = {
  id: number;
  email: string;
  profile_id: number;
  member_name: string;
  member_email: string;
  wishlist_id: number;
  movie_id: number;
  title: string;
  age_rating:
    | "전체 관람가"
    | "12세 이상 관람가"
    | "15세 이상 관람가"
    | "청소년 관람불가";
  runtime: string;
  rating: string;
  teaser_url: string;
  poster_img: string;
  plot_summary: string;
  release_date: string;
  directors: string;
  production_companies: string;
  genres: string;
  categories: CategoryFilterType;
  membership_level:
    | "프리미엄(Premium) 4K+HDR"
    | "스탠다드(Standard) 1080p"
    | "광고형 스탠다드(AD) 1080p";
  membership_amount: string;
  card_number: string;
  expiry_date: string;
  payment_date: string;
  card_name: string;
  payment_amount: number;
};
