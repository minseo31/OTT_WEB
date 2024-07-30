import FooterCookieTitleSection from "../footerCookie/FooterCookieTitleSection";
import FooterCookieTextSection from "../footerCookie/FooterCookieTextSection";
import FooterCookieButtonSection from "../footerCookie/FooterCookieButtonSection";
import { footerCookieContainerStyle } from "../../../../style/modal/footerCookie/footerCookie";
import { CookieModalPropsType } from "../../../../type/props/footer";
import { useEffect, useState } from "react";

// 푸터 쿠키 설정 컨테이너
const FooterCookieContainer = ({
  setCookiModal,
  setCookie,
  setPolicyModal,
  cookieModal,
}: CookieModalPropsType) => {
  // 쿠키 모달 위치 값
  const [cookiePosition, setCookiePosition] = useState<
    "bottom-[-300px]" | "bottom-[0]"
  >("bottom-[-300px]");

  useEffect(() => {
    if (cookieModal) {
      setCookiePosition("bottom-[0]");
    } else {
      setCookiePosition("bottom-[-300px]");
    }
  }, [cookieModal]);

  return (
    <div
      className={`${footerCookieContainerStyle} ${cookiePosition} transition-all duration-500`}
    >
      <FooterCookieTitleSection />
      <FooterCookieTextSection />
      <FooterCookieButtonSection
        setCookiModal={setCookiModal}
        setCookie={setCookie}
        setPolicyModal={setPolicyModal}
        cookieModal={cookieModal}
      />
    </div>
  );
};

export default FooterCookieContainer;
