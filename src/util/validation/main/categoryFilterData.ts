import { categoryFilter } from "./categoryfilter";
import { MainData } from "../../../type/data/MainData";

// 전체 영화 데이터를 가져오고 카테고리 별 데이터를 분리
export const categoryDataFilter = (
  movieData: MainData[] | undefined
): MainData[][] => {
  if (!movieData) return [[]]; // 데이터가 없으면 빈 배열 반환

  // 각 카테고리 별 데이터를 필터링
  const newContentData = categoryFilter(movieData, "신규 콘텐츠");
  const watchedData = categoryFilter(
    movieData,
    "아직도 안봤다고? 안 보면 손해인 콘텐츠"
  );
  const netflixData = categoryFilter(movieData, "오직 넷플릭스에서만!");
  const thrillingData = categoryFilter(movieData, "긴장감 100%!!!");
  const romanceData = categoryFilter(
    movieData,
    "봄을 느낄 수 있는 로맨틱한 드라마"
  );
  const sleapData = categoryFilter(movieData, "이거보면 오늘 혼자 잠 못 자요");
  const familyData = categoryFilter(
    movieData,
    "가족과 함께 동심의 세계로 떠나세요!"
  );
  const imHeroData = categoryFilter(movieData, "오늘만큼은 내가 히어로!");
  const documentaryData = categoryFilter(
    movieData,
    "잠자기 전 보기 좋은 다큐멘터리"
  );

  // 각 카테고리 데이터를 하나의 배열로 합침
  return [
    newContentData,
    watchedData,
    netflixData,
    thrillingData,
    romanceData,
    sleapData,
    familyData,
    imHeroData,
    documentaryData,
  ];
};
