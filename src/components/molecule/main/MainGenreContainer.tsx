import { useState } from "react";
import {
  genreChoiceContainerStyle,
  genreContainerStyle,
  genrePostBoxStyle,
} from "../../../style/molecule/main/genre";
import { GenreContainerPropsType } from "../../../type/props/main";
import MainGenreHeader from "./MainGenreHeader";
import { GenreChoiceStateType } from "../../../type/state";
import { MainData } from "../../../type/data/MainData";
import MainCategoryPost from "./MainCategoryPost";

// 장르 컨테이너
const MainGenreContainer = ({
  setGenreOpen,
  movieData,
  setTeaserModal,
  setModalContent,
  setLoginMember,
  viewingHistory,
}: GenreContainerPropsType) => {
  // 선택한 장르
  const [genreChoice, setGenreChoice] = useState<GenreChoiceStateType>("전체");
  // 선택한 장르의 데이터
  const [genreFilterData, setGenreFilterData] = useState<MainData[]>();

  const [demo, setDemo] = useState<boolean>(false);

  return (
    <div
      className={`${genreContainerStyle}`}
      style={{ scrollbarColor: "#E50914 black", scrollbarWidth: "thin" }}
    >
      {/* 장르 리스트 (헤더) */}
      <MainGenreHeader
        setGenreChoice={setGenreChoice}
        genreChoice={genreChoice}
        setGenreFilterData={setGenreFilterData}
        movieData={movieData}
      />
      <div className={`${genreChoiceContainerStyle}`}>
        {/* 전체 리스트 */}
        {genreChoice === "전체"
          ? movieData?.data.map((movie) => (
              <div key={movie.movieId} className={`${genrePostBoxStyle}`}>
                <MainCategoryPost
                  data={movie}
                  setModalContent={setModalContent}
                  setTeaserModal={setTeaserModal}
                  modalContent={movie}
                  setWishState={setDemo}
                  wishState={demo}
                  title=""
                  setLoginMember={setLoginMember}
                  viewingHistory={viewingHistory}
                />
              </div>
            ))
          : // 장르별 리스트
            genreFilterData?.map((movie) => (
              <div key={movie.movieId} className={`${genrePostBoxStyle}`}>
                <MainCategoryPost
                  data={movie}
                  setModalContent={setModalContent}
                  setTeaserModal={setTeaserModal}
                  modalContent={movie}
                  setWishState={setDemo}
                  wishState={demo}
                  title=""
                  setLoginMember={setLoginMember}
                  viewingHistory={viewingHistory}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default MainGenreContainer;
