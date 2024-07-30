export type footerDataType = {
  id: string;
  texts: footerTextsType[];
};

export type footerTextsType = {
  id: string;
  text: string;
};

// 푸터 쿠키 텍스트
export type FooterCookieTextType = {
  id: string;
  text: string;
};

// 푸터 쿠키 데이터
export type FooterCookieDataType = {
  id: string;
  texts: FooterCookieTextType[];
};

export type FooterModalDataType = {
  title: "고객센터" | "개인정보 처리방침" | "이용약관";
  section:
    | "FooterModalCustomerServiceSection"
    | "FooterModalPrivacyPolicySection"
    | "FooterModalTermsOfServiceSection";
};

// 푸터 모달 텍스트 타입(공통)
export type FooterModalTextType = {
  id: string;
  text: string;
};

// 푸터 모달 개인정보 섹션 타입
export type FooterModalPrivacyPolicySectionType = {
  id: string;
  texts: FooterModalTextType[];
};

// 푸터 모달 개인정보 데이터 타입
export type FooterModalPrivacyPolicyDataType = {
  id: string;
  title: string;
  sections: FooterModalPrivacyPolicySectionType[];
};

// 푸터 모달 이용약관 텍스트 타입(문단별)
export type FooterModalTermsOfServiceTextType = {
  id: string;
  paragraphs: FooterModalTextType[];
};

// 푸터 모달 이용약관 섹션 타입
export type FooterModalTermsOfServiceSectionType = {
  id: string;
  title: string;
  texts: FooterModalTermsOfServiceTextType[];
};

// 푸터 모달 이용약관 데이터 타입
export type FooterModalTermsOfServiceDataType = {
  id: string;
  title: string;
  sections: FooterModalTermsOfServiceSectionType[];
};
