import { MainData } from "../../type/data/MainData";
import { MovieResponseType } from "../../type/service/get/movie";
import { GenreChoiceStateType } from "../../type/state";
import { genreFilter } from "../../util/validation/main/genreFilter";

// 장르 선택 이벤트
export const genreChoiceEvnet = (
  genre: GenreChoiceStateType,
  setGenreChoice: React.Dispatch<React.SetStateAction<GenreChoiceStateType>>,
  setGenreFilterData: React.Dispatch<
    React.SetStateAction<MainData[] | undefined>
  >,
  movieData: MovieResponseType | undefined
) => {
  // 선택한 장르명 업데이트
  setGenreChoice(genre);

  //   선택한 장르로 데이터 필터링
  genreFilter(setGenreFilterData, genre, movieData);
};

// 장르 컨테이너 오픈 이벤트
export const genreContainerOpenEvent = (
  setGenreOpen: React.Dispatch<React.SetStateAction<boolean>> | undefined,
  bool: boolean
) => {
  if (setGenreOpen) {
    setGenreOpen(bool);
  }
};
