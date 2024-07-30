import { MainBgImgStyle } from "../../../style/atom/bg";
import { MembershipBgImgType } from "../../../type/props/home";

// 홈 페이지 멤버쉽 컨테이너 배경 이미지
const MembershipBgImg = ({ imgURL }: MembershipBgImgType) => {
  return <img src={imgURL} alt="" className={`${MainBgImgStyle} opacity-40`} />;
};

export default MembershipBgImg;
