import { footerCookieData } from "../../../../data/footerData";
import {
  footerCookieTextContainerStyle,
  footerCookieTextStyle,
} from "../../../../style/modal/footerCookie/footerCookie";
import { FooterCookieDataType } from "../../../../type/data/footerData";
import SmallText from "../../../atom/text/SmallText";

// 푸터 쿠키 텍스트 섹션
const FooterCookieTextSection = () => {
  return (
    <div className={`${footerCookieTextContainerStyle}`}>
      {footerCookieData.map((data: FooterCookieDataType) => (
        <div key={data.id} className={`${footerCookieTextStyle}`}>
          {data.texts.map((text) => (
            <SmallText key={text.id} text={text.text} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterCookieTextSection;
