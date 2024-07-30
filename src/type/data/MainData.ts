import { ageRatingImgStateType } from "../state";
import { CategoryFilterType } from "../util/categorilFilterType";

// 영화 데이터 타입
export type MainData = {
  movieId: number;
  movieTitle: string;
  releaseDate: string;
  genreNames: string;
  categoryNames: CategoryFilterType;
  ageRating:
    | "전체 관람가"
    | "12세 이상 관람가"
    | "15세 이상 관람가"
    | "청소년 관람불가";
  runtime: string;
  movieRating: string;
  teaserUrl: string;
  posterImage: string;
  plotSummary: string;
  productionCompanyNames: string;
  directorNames: string;
};

// 장르 데이터 타입
export type GenreDataType = {
  id:
    | "all"
    | "netFlix"
    | "action"
    | "comedy"
    | "thriller"
    | "romance"
    | "animation"
    | "horror"
    | "documentary";
  genre:
    | "전체"
    | "NetFlix"
    | "액션"
    | "코미디"
    | "스릴러"
    | "로맨스"
    | "애니메이션"
    | "공포"
    | "다큐멘터리";
};

// 관람가 데이터 타입
export type AgeRatingDataType = {
  id: "allAge" | "12Age" | "15Age" | "19Age";
  age:
    | "전체 관람가"
    | "12세 이상 관람가"
    | "15세 이상 관람가"
    | "청소년 관람불가";
  img:
    | "/image/age/ageall.svg"
    | "/image/age/age12.svg"
    | "/image/age/age15.svg"
    | "/image/age/age19.svg";
};
