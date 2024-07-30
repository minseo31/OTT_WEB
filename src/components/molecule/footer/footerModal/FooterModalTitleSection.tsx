import { footerModalTitleStyle } from "../../../../style/modal/footerModal/footerModal";
import { footerModalTitlePropsType } from "../../../../type/props/footer";
import Fulllogo from "../../../atom/logo/Fulllogo";
import MainTitle from "../../../atom/text/MainTitle";

// 푸터 모달 타이틀
const FooterModalTitleSection = ({ title }: footerModalTitlePropsType) => {
  return (
    <div className={`${footerModalTitleStyle}`}>
      <Fulllogo width="w-[150px]" height="h-[75px]" />
      <MainTitle text={title} />
    </div>
  );
};

export default FooterModalTitleSection;
