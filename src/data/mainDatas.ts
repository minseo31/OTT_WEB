import { AgeRatingDataType, GenreDataType } from "../type/data/MainData";

export const mainData = [
  {
    id: "category1",
    title: "신규 콘텐츠",
  },
  {
    id: "category2",
    title: "아직도 안봤다고? 안보면 손해인 콘텐츠",
  },
  {
    id: "category3",
    title: "오직 넷플릭스에서만!",
  },
  {
    id: "category4",
    title: "긴장감 100%!!!",
  },
  {
    id: "category5",
    title: "봄을 느낄 수 있는 로맨틱한 드라마",
  },
  {
    id: "category6",
    title: "이거보면 오늘 혼자 잠 못자요",
  },
  {
    id: "category7",
    title: "가족과 함께 동심의 세계로 떠나세요!",
  },
  {
    id: "category8",
    title: "오늘 만큼은 내가 히어로!",
  },
  {
    id: "category9",
    title: "잠자기 전 보기 좋은 다큐멘터리",
  },
];

// 장르 데이터
export const genreData: GenreDataType[] = [
  {
    id: "all",
    genre: "전체",
  },
  {
    id: "netFlix",
    genre: "NetFlix",
  },
  {
    id: "action",
    genre: "액션",
  },
  {
    id: "comedy",
    genre: "코미디",
  },
  {
    id: "thriller",
    genre: "스릴러",
  },
  {
    id: "romance",
    genre: "로맨스",
  },
  {
    id: "animation",
    genre: "애니메이션",
  },
  {
    id: "horror",
    genre: "공포",
  },
  {
    id: "documentary",
    genre: "다큐멘터리",
  },
];

// 관람가 데이터
export const ageRatingData: AgeRatingDataType[] = [
  {
    id: "allAge",
    age: "전체 관람가",
    img: "/image/age/ageall.svg",
  },
  {
    id: "12Age",
    age: "12세 이상 관람가",
    img: "/image/age/age12.svg",
  },
  {
    id: "15Age",
    age: "15세 이상 관람가",
    img: "/image/age/age15.svg",
  },
  {
    id: "19Age",
    age: "청소년 관람불가",
    img: "/image/age/age19.svg",
  },
];
