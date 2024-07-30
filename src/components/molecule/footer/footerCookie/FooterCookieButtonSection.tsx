import { useState } from "react";
import { handleCookieModalOpen } from "../../../../event/home/footerModalEvent";
import { footerCookieButtnStyle } from "../../../../style/modal/footerCookie/footerCookie";
import { CookieModalPropsType } from "../../../../type/props/footer";
import MediumBtn from "../../../atom/button/MediumBtn";
import SubText from "../../../atom/text/SubText";

// 푸터 쿠키 버튼
const FooterCookieButtonSection = ({
  setCookiModal,
  setCookie,
  setPolicyModal,
}: CookieModalPropsType) => {
  // 쿠키 상태 메세지 값
  const [cookieMessage, setCookieMessage] = useState<
    "쿠키를 허용하였습니다" | "쿠키가 차단되었습니다"
  >("쿠키를 허용하였습니다");
  // 쿠키 상태 메세지 투명도 값
  const [cookieOpacity, setCookieOpacity] = useState<
    "opacity-100" | "opacity-0"
  >("opacity-0");

  return (
    <div className={`${footerCookieButtnStyle}`}>
      {/* 쿠키 허용 */}
      <div
        onClick={() =>
          handleCookieModalOpen(
            setCookiModal,
            setCookie,
            setPolicyModal,
            "쿠키설정",
            true,
            setCookieMessage,
            setCookieOpacity
          )
        }
      >
        <MediumBtn text="쿠키 허용" bgColor="bg-main_Red" />
      </div>
      {/* 쿠키 차단 */}
      <div
        onClick={() =>
          handleCookieModalOpen(
            setCookiModal,
            setCookie,
            setPolicyModal,
            "쿠키설정",
            false,
            setCookieMessage,
            setCookieOpacity
          )
        }
      >
        <MediumBtn
          text="쿠키 차단"
          bgColor="bg-black1_07"
          border="border-soild border-white border-2"
        />
      </div>
      {/* 쿠키 메세지 */}
      <div
        className={`${cookieOpacity} fixed top-8 left-[43%] w-[200px] h-fit p-4 bg-black rounded-lg transtion-all duration-300`}
      >
        <SubText text={cookieMessage} align="text-center" />
      </div>
    </div>
  );
};

export default FooterCookieButtonSection;
