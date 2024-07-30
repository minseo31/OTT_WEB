import { MovieResponseType } from "../../../type/service/get/movie";

// 검색 값에 따른 영화 데이터 필터링 (제목의 부분 문자열)
export const searchFilter = (
  movieData: MovieResponseType | undefined,
  inputValue: string
) => {
  // 영화 제목에 사용자가 입력한 값이 부분 문자열로 존재하는 데이터만 반환
  const filterData = movieData?.data.filter((movie) => {
    return movie.movieTitle.includes(inputValue);
  });

  return filterData;
};
