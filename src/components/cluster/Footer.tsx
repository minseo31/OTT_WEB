import { useEffect, useState } from "react";
import { footerData } from "../../data/footerData";
import {
  footerContainerStyle,
  footerContentContainerStyle,
} from "../../style/cluster/Footer";
import { footerDataType } from "../../type/data/footerData";
import SmallText from "../atom/text/SmallText";
import FooterContentListBox from "../molecule/footer/FooterContentListBox";
import FooterCookieContainer from "../molecule/footer/footerCookieContainer/FooterCookieContainer";
import FooterListSnsBox from "../molecule/footer/FooterListSnsBox";
import FooterLogoBox from "../molecule/footer/FooterLogoBox";
import FooterModalContainer from "../molecule/footer/footerModalContainer/FooterModalContainer";
import { useNavigate } from "react-router-dom";
import { footerMembershipScrollEvent } from "../../event/home/footerScrollEvent";

// 푸터
const Footer = () => {
  // 네비게이터
  const navigation = useNavigate();
  // 쿠키 모달 오픈 상태
  const [cookieModal, setCookiModal] = useState<boolean>(false);
  // 쿠키 모달  추적
  const [cookie, setCookie] = useState<string>("");

  // 개인정보 처리방침 모달 오픈 상태
  const [policyModal, setPolicyModal] = useState<boolean>(false);

  useEffect(() => {
    // 네비게이션 (로그인)
    if (
      cookie === "로그인" ||
      cookie === "회원가입" ||
      cookie === "OTT 콘텐츠 보러가기"
    ) {
      navigation("/login");
      window.scrollTo(0, 0);
    }

    // 멤버쉽으로 스크롤 이동
    if (cookie === "멤버쉽") {
      footerMembershipScrollEvent();
    }

    // 찐 넷플릭스 제공 콘텐츠로 이동
    if (cookie === "제공하는 콘텐츠") {
      window.location.href = "https://about.netflix.com/ko/new-to-watch";
    }
  }, [cookie]);

  return (
    <footer className={`${footerContainerStyle}`}>
      <div className={`${footerContentContainerStyle}`}>
        <FooterLogoBox />
        {footerData.map((data: footerDataType) => (
          <div key={data.id}>
            <FooterContentListBox
              listText={data}
              setCookiModal={setCookiModal}
              setCookie={setCookie}
              setPolicyModal={setPolicyModal}
            />
          </div>
        ))}
        <FooterListSnsBox />
      </div>
      <SmallText text="넷플릭스 대한민국 @2024 / 팀프로젝트 포트폴리오 Developer : 김민서, 김병찬 , 노유정, 홍석환" />
      {/* 쿠키 모달 */}
      <FooterCookieContainer
        setCookiModal={setCookiModal}
        setCookie={setCookie}
        setPolicyModal={setPolicyModal}
        cookieModal={cookieModal}
      />
      {/* 개인정보 처리 방침 모달 */}
      {policyModal && cookie === "고객센터" && (
        <FooterModalContainer
          setPolicyModal={setPolicyModal}
          isModal="고객센터"
        />
      )}
      {policyModal && cookie === "이용약관" && (
        <FooterModalContainer
          setPolicyModal={setPolicyModal}
          isModal="이용약관"
        />
      )}
      {policyModal && cookie === "문의하기" && (
        <FooterModalContainer
          setPolicyModal={setPolicyModal}
          isModal="문의하기"
        />
      )}
      {policyModal && cookie === "개인정보 처리방침" && (
        <FooterModalContainer
          setPolicyModal={setPolicyModal}
          isModal="개인정보 처리방침"
        />
      )}
    </footer>
  );
};

export default Footer;
