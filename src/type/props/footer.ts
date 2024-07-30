import { footerDataType } from "../data/footerData";
import { IsSideBarOpenStateType } from "../state";

// 푸터 리스트 박스 Props 타입
export type FooterListBoxPropsType = {
  listText: footerDataType;
  setCookiModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCookie: React.Dispatch<React.SetStateAction<string>>;
  setPolicyModal: React.Dispatch<React.SetStateAction<boolean>>;
};

// 쿠키 모달 Props 타입
export type CookieModalPropsType = {
  setCookiModal: IsSideBarOpenStateType;
  setCookie: React.Dispatch<React.SetStateAction<string>>;
  setPolicyModal: IsSideBarOpenStateType;
  cookieModal: boolean;
};

// 개인정보 처리방침 모달 Props 타입
export type footerModalPropsType = {
  setPolicyModal: React.Dispatch<React.SetStateAction<boolean>>;
  isModal?: footerModalTitleType;
};

// 모달 타이틀 Props 타입
export type footerModalTitlePropsType = {
  title?: footerModalTitleType;
};

type footerModalTitleType =
  | "고객센터"
  | "문의하기"
  | "이용약관"
  | "개인정보 처리방침";
