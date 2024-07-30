import { MainBgImgStyle } from "../../../style/atom/bg";

// 메인 배경 이미지
const MainBgImg = () => {
  return (
    <img src="/image/bg/main-bg.jpg" alt="" className={`${MainBgImgStyle}`} />
  );
};

export default MainBgImg;
