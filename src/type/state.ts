import { MemberDataType } from "./service/get/member";
import { UserAddDataType } from "./service/post/signup";

// 사이드 바 오픈 상태 state 타입
export type IsSideBarOpenStateType = React.Dispatch<
  React.SetStateAction<boolean>
>;

// 사이드 바 페이지 추적 상태 state 타입
export type SideBarCurrentPageStateType = React.Dispatch<
  React.SetStateAction<"s1" | "s2" | "s3" | "s4">
>;

// 멤버쉽 모달 추적 state 타입
export type MembershgipModalStateType = React.Dispatch<
  React.SetStateAction<"p_membership" | "s_membership" | "a_membership">
>;

// 가입 단계 상태 state props 타입
export type SignLevelState = {
  setSignLevel: React.Dispatch<React.SetStateAction<0 | 1 | 2 | 3 | 4>>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  setUserPW: React.Dispatch<React.SetStateAction<string>>;
  userEmail?: string;
  loginMember: MemberDataType[] | undefined;
  signUpData?: UserAddDataType;
  setSignUpData: React.Dispatch<React.SetStateAction<UserAddDataType>>;
  setMembershipName: React.Dispatch<
    React.SetStateAction<"p_membership" | "s_membership" | "a_membership">
  >;
  membershipName?: "p_membership" | "s_membership" | "a_membership";
};

// 선택한 장르 state 타입
export type GenreChoiceStateType =
  | "전체"
  | "NetFlix"
  | "액션"
  | "코미디"
  | "스릴러"
  | "로맨스"
  | "애니메이션"
  | "공포"
  | "다큐멘터리";

// 관람가 이미지 경로 state 타입
export type ageRatingImgStateType =
  | "/image/age/ageall.svg"
  | "/image/age/age12.svg"
  | "/image/age/age15.svg"
  | "/image/age/age19.svg";
