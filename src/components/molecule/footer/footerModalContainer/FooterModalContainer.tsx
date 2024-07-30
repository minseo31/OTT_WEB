import { useEffect, useState } from "react";
import {
  footerMadalOverlayBoxStyle,
  footerModalContainerStyle,
} from "../../../../style/modal/footerModal/footerModal";
import { footerModalPropsType } from "../../../../type/props/footer";
import Overlay from "../../../atom/bg/Overlay";
import ModalBtn from "../../../atom/button/ModalBtn";
import FooterModalCustomerServiceSection from "../footerModal/FooterModalCustomerServiceSection";
import FooterModalPrivacyPolicySection from "../footerModal/FooterModalPrivacyPolicySection";
import FooterModalTermsOfServiceSection from "../footerModal/FooterModalTermsOfServiceSection";
import FooterModalTitleSection from "../footerModal/FooterModalTitleSection";

// 푸터 모달 컨테이너
const FooterModalContainer = ({
  setPolicyModal,
  isModal,
}: footerModalPropsType) => {
  // 모달 콘텐츠
  const [isContent, setIsContent] = useState<JSX.Element>(<></>);

  // 모달 콘텐츠 필터링
  useEffect(() => {
    if (isModal === "고객센터" || isModal === "문의하기") {
      setIsContent(<FooterModalCustomerServiceSection />);
    } else if (isModal === "개인정보 처리방침") {
      setIsContent(<FooterModalPrivacyPolicySection />);
    } else if (isModal === "이용약관") {
      setIsContent(<FooterModalTermsOfServiceSection />);
    }
  }, [setPolicyModal, isModal]);

  return (
    <div className={`${footerMadalOverlayBoxStyle}`}>
      <div onClick={() => setPolicyModal((prev) => !prev)}>
        <Overlay />
      </div>
      <div
        className={`${footerModalContainerStyle}`}
        style={{ scrollbarColor: "#E50914 black", scrollbarWidth: "thin" }}
      >
        <FooterModalTitleSection title={isModal} />
        {isContent}
      </div>
      <div onClick={() => setPolicyModal((prev) => !prev)}>
        <ModalBtn text="닫기" bgColor="bg-main_Red" />
      </div>
    </div>
  );
};

export default FooterModalContainer;
