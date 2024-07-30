import { useEffect, useState } from "react";
import { postImgStyle } from "../../../style/molecule/main/category";
import {
  searchAgeBoxStyle,
  searchListBoxStyle,
  searchListInfoBoxStyle,
  searchListTextBoxStyle,
  searchTextBoxStyle,
} from "../../../style/molecule/main/search";
import { searchListBoxPropsType } from "../../../type/props/main";
import MainText from "../../atom/text/MainText";
import SubText from "../../atom/text/SubText";
import SubTitle from "../../atom/text/SubTitle";
import { ageRatingImgStateType } from "../../../type/state";
import { ageRatingData } from "../../../data/mainDatas";
import { ageRatingVali } from "../../../util/validation/main/ageVali";

// 검색 리스트 박스
const SearchListBox = ({ movie }: searchListBoxPropsType) => {
  // 관람가 이미지 경로
  const [ageImg, setAgeImg] = useState<ageRatingImgStateType>(
    ageRatingData[0].img
  );

  useEffect(() => {
    // 관람가 이미지 지정
    ageRatingVali(setAgeImg, movie.ageRating);
  }, [ageImg]);

  return (
    <div className={`${searchListBoxStyle}`}>
      <img
        src={movie.posterImage}
        alt={movie.movieTitle}
        className={`${postImgStyle}`}
      />
      <div className={`${searchListTextBoxStyle}`}>
        <div className={`${searchTextBoxStyle}`}>
          <SubTitle text={movie.movieTitle} />
        </div>
        <div className={`${searchListInfoBoxStyle}`}>
          <div className={`${searchAgeBoxStyle}`}>
            <SubText text="시청 연령 | " align="text-start" />
            <img
              src={ageImg}
              alt=""
              className="w-[20px] h-[20px] object-cover"
            />
            <SubText text={movie.ageRating} align="text-start" />
          </div>
          <div className={`${searchTextBoxStyle}`}>
            <SubText text={`장르 | ${movie.genreNames}`} align="text-start" />
          </div>
          <div className={`${searchTextBoxStyle}`}>
            <SubText
              text={`평점 | ${movie.movieRating} / 10점`}
              align="text-start"
            />
          </div>
          <div className={`${searchTextBoxStyle}`}>
            <SubText text={`런타임 | ${movie.runtime}`} align="text-start" />
          </div>
          <div className={`${searchTextBoxStyle}`}>
            <SubText
              text={`개봉일 | ${movie.releaseDate}`}
              align="text-start"
            />
          </div>
        </div>
        <div className={`${searchTextBoxStyle}`}>
          <MainText text={movie.plotSummary} align="text-start" />
        </div>
      </div>
    </div>
  );
};

export default SearchListBox;
