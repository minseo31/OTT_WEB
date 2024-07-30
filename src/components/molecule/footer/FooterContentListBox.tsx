import { useState } from "react";
import { handleCookieModalOpen } from "../../../event/home/footerModalEvent";
import { footerContentListBoxStyle } from "../../../style/cluster/Footer";
import { FooterListBoxPropsType } from "../../../type/props/footer";
import SubText from "../../atom/text/SubText";

// 푸터 콘텐츠 리스트 박스
const FooterContentListBox = ({
  listText,
  setCookiModal,
  setCookie,
  setPolicyModal,
}: FooterListBoxPropsType) => {
  const [demo, setDemo] = useState<
    "쿠키를 허용하였습니다" | "쿠키가 차단되었습니다"
  >("쿠키가 차단되었습니다");
  // 쿠키 상태 메세지 투명도 값
  const [demo1, setDemo1] = useState<"opacity-100" | "opacity-0">("opacity-0");

  return (
    <div className={`${footerContentListBoxStyle}`}>
      {listText.texts.map((text) => (
        <div
          key={text.id}
          onClick={() =>
            handleCookieModalOpen(
              setCookiModal,
              setCookie,
              setPolicyModal,
              text.text,
              true,
              setDemo,
              setDemo1
            )
          }
        >
          <SubText text={text.text} align="text-start" />
        </div>
      ))}
    </div>
  );
};

export default FooterContentListBox;
