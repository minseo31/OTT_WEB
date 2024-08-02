import { MemberDataType } from "../service/get/member";
import { IsSideBarOpenStateType, MembershgipModalStateType } from "../state";

// 로그인 페이지 props 타입
export type LoginPagePropsType = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  setUserPW: React.Dispatch<React.SetStateAction<string>>;
  userEmail: string;
  loginMember: MemberDataType[] | undefined;
  signMove?: boolean;
  setSignMove: React.Dispatch<React.SetStateAction<boolean>>;
};

// 가입하기 멤버쉽 선택 박스 props 타입
export type SignMembershipBoxPropsType = {
  MembershipData: MembershipType;
  openModal: boolean;
  setOpenModal: IsSideBarOpenStateType;
  setMembership: (id: "p_membership" | "s_membership" | "a_membership") => void;
  membership: "p_membership" | "s_membership" | "a_membership";
};

// 가입하기 멤버쉽 선택 박스 props 데이터 타입
export type MembershipType = {
  id: "p_membership" | "s_membership" | "a_membership";
  name1: "프리미엄(Premium)" | "스탠다드(Standard)" | "광고형 스탠다드(AD)";
  name2: "4K+HDR" | "1080p";
  info: string;
  list_text: MembershiplistType[];
};

// 가입하기 멤버쉽 설명 리스트 타입
export type MembershiplistType = {
  id: string;
  list: string;
};

// 가입하기 3단계 유효성 검사 실패 모달 Props 타입
export type SignUp3VailModalPropsType = {
  msg: string;
  setVailModal: React.Dispatch<React.SetStateAction<boolean>>;
};
