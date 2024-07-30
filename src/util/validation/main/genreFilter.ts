import { MainData } from "../../../type/data/MainData";
import { MovieResponseType } from "../../../type/service/get/movie";
import { GenreChoiceStateType } from "../../../type/state";

// 선택한 장르의 영화만 필터링
export const genreFilter = (
  setGenreFilterData: React.Dispatch<
    React.SetStateAction<MainData[] | undefined>
  >,
  genre: GenreChoiceStateType,
  movieData: MovieResponseType | undefined
) => {
  // 장르에 부분 문자열로 선택한 장르명이 있는 데이터만 필터링
  const filterData = movieData?.data.filter((movie) => {
    if (movie.genreNames) {
      return movie.genreNames.includes(genre);
    }
    return false;
  });

  // 필터링 된 데이터 저장
  setGenreFilterData(filterData);
};
