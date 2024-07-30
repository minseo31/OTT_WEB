import { Link } from "react-router-dom";
import {
  footerContentListBoxStyle,
  footerMobBoxStyle,
  footerMobContentBoxStyle,
} from "../../../style/cluster/Footer";
import Fulllogo from "../../atom/logo/Fulllogo";
import Shortlogo from "../../atom/logo/Shortlogo";
import SubText from "../../atom/text/SubText";

// 푸터 로고 + 모바일 박스
const FooterLogoBox = () => {
  return (
    <div className={`${footerContentListBoxStyle}`}>
      <Fulllogo width="w-[200px]" height="h-[100px]" />
      <SubText
        text="질문이 있으신가요? 문의메일 : netflix@netflix.com"
        align="text-start"
      />
      <Link
        to="https://play.google.com/store/apps/details?id=com.netflix.mediaclient&hl=ko"
        className={`${footerMobContentBoxStyle}`}
      >
        <div className={`${footerMobBoxStyle}`}>
          <Shortlogo />
        </div>
        <SubText text="모바일 앱 이용하기" align="text-start" />
      </Link>
    </div>
  );
};

export default FooterLogoBox;
