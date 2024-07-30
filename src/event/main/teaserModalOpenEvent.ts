import { MainData } from "../../type/data/MainData";

// 티저 모달 오픈 핸들러
export const handelTeaserModalOpen = (
  setTeaserModal: React.Dispatch<React.SetStateAction<boolean>>,
  setModalContent: React.Dispatch<React.SetStateAction<MainData>>,
  data: MainData,
  setClickMovie: React.Dispatch<React.SetStateAction<any>>
) => {
  setModalContent(data);
  setTeaserModal((prev) => !prev);
  setClickMovie(data);
};
