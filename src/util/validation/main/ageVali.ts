import { ageRatingData } from "../../../data/mainDatas";
import { ageRatingImgStateType } from "../../../type/state";

// 관람가 필터링
export const ageRatingVali = (
  setAgeImg: React.Dispatch<React.SetStateAction<ageRatingImgStateType>>,
  ageRating:
    | "전체 관람가"
    | "12세 이상 관람가"
    | "15세 이상 관람가"
    | "청소년 관람불가"
) => {
  const age = ageRatingData.filter((age) => {
    return age.age === ageRating;
  });

  // 해당 관람가의 이미지 경로 저장
  setAgeImg(age[0].img);
};
