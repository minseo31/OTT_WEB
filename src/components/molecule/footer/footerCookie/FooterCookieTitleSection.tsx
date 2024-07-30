import { footerCookieTitelStyle } from "../../../../style/modal/footerCookie/footerCookie";
import Fulllogo from "../../../atom/logo/Fulllogo";
import SubTitle from "../../../atom/text/SubTitle";

// 푸터 쿠키 로고 & 타이틀
const FooterCookieTitleSection = () => {
  return (
    <div className={`${footerCookieTitelStyle}`}>
      <Fulllogo width="w-[150px]" height="h-[75px]" />
      <SubTitle text="쿠키 설정" />
    </div>
  );
};

export default FooterCookieTitleSection;
