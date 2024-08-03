import { KeyedMutator } from "swr";
import { EmailResponseType } from "../service/get/email";
import { MemberDataType, MemberResponseType } from "../service/get/member";
import { MovieResponseType } from "../service/get/movie";
import { SideBarCurrentPageStateType } from "../state";
import { MainData } from "../data/MainData";

// 프로필 페이지 Props 타입
export type SideBarPropsType = {
  isPage: "s1" | "s2" | "s3" | "s4";
  setIsPage: SideBarCurrentPageStateType;
  movieData?: MovieResponseType | undefined;
  setSearchOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setGenreOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  memberData?: MemberResponseType | null | undefined;
  userEmail?: string;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  setUserPW: React.Dispatch<React.SetStateAction<string>>;
  emailData?: EmailResponseType;
  loginMember: MemberDataType[] | undefined;
  setLoginMember: React.Dispatch<
    React.SetStateAction<MemberDataType[] | undefined>
  >;
  isLogin: boolean;
  setIsMeber: React.Dispatch<React.SetStateAction<boolean>>;
  isMember?: boolean;
  setWishState: React.Dispatch<React.SetStateAction<boolean>>;
  wishState: boolean;
  memberMutate?: KeyedMutator<MemberResponseType | null>;
  wishMSGModal: "opacity-0" | "opacity-100";
  setWishMSGModal: React.Dispatch<
    React.SetStateAction<"opacity-0" | "opacity-100">
  >;
  isWish: boolean;
  setIsWish: React.Dispatch<React.SetStateAction<boolean>>;
  setViewingHistory: React.Dispatch<React.SetStateAction<MainData[]>>;
  viewingHistory: MainData[];
  setMemberData: React.Dispatch<
    React.SetStateAction<MemberResponseType | null>
  >;
};

// 프로필 컨테이너
export type ProfileContainerPropsType = {
  loginMember: MemberDataType[] | undefined;
  uniqueData: MemberDataType[] | undefined;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

// 프로필 멤버 컨테이너 Props 타입
export type ProfileSetPropsType = {
  members: MemberDataType[] | undefined;
  userEmail: string | undefined;
  loginMember: MemberDataType[] | undefined;
  emailData?: EmailResponseType;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  setUserPW: React.Dispatch<React.SetStateAction<string>>;
  setLoginMember: React.Dispatch<
    React.SetStateAction<MemberDataType[] | undefined>
  >;
  setIsMember: React.Dispatch<React.SetStateAction<boolean>>;
  isMember?: boolean;
  setMembers: React.Dispatch<
    React.SetStateAction<MemberDataType[] | undefined>
  >;
};

// 프로필 멤버 박스 Props 타입
export type ProfileMemberBoxPropsType = {
  member: MemberDataType;
  setMemberDelModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteMember: React.Dispatch<
    React.SetStateAction<MemberDataType | undefined>
  >;
  setMemberLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLoginMemberEmail: React.Dispatch<React.SetStateAction<string>>;
  setLoginMemberName: React.Dispatch<React.SetStateAction<string>>;
  setMemberAccessModal: React.Dispatch<React.SetStateAction<boolean>>;
  isMember?: boolean;
};

// 프로필 멤버 삭제 모달 Props 타입
export type ProfileMemberDelModalPropsType = {
  deleteMember: MemberDataType | undefined;
  setMemberDelModal: React.Dispatch<React.SetStateAction<boolean>>;
};

// 멤버 추가 Props 타입
export type ProfileMemberAddPropsType = {
  setMemberAddMadal: React.Dispatch<React.SetStateAction<boolean>>;
  loginMember: MemberDataType[] | undefined;
  emailData?: EmailResponseType;
};

// 로그아웃 모달 Props 타입
export type LogoutModalPropsType = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setLogoutModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// 중복된 이메일 모달 Props 타입
export type RedundancyEmailPropsType = {
  setIsRedundancyEmail: React.Dispatch<React.SetStateAction<boolean>>;
};

// 멤버 추가 완료 모달 Props 타입
export type MemberAddFinishPropsType = {
  setAddMemberModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// 멤버 로그인 모달 Props 타입
export type MemberLoginModalPropsType = {
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  setUserPW: React.Dispatch<React.SetStateAction<string>>;
  setMemberLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
  members: MemberDataType[] | undefined;
  setLoginMember: React.Dispatch<
    React.SetStateAction<MemberDataType[] | undefined>
  >;
  setIsMeber: React.Dispatch<React.SetStateAction<boolean>>;
  loginMemberEmail: string;
  loginMemberName: string;
  loginMember: MemberDataType[] | undefined;
};

// 멤버 로그인 성공 모달 Props 타입
export type MemberLoginModalClaerPropsType = {
  setMemberLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMeber: React.Dispatch<React.SetStateAction<boolean>>;
  setMemberLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  loginMemberEmail: string;
  setUserPW: React.Dispatch<React.SetStateAction<string>>;
  pw: string;
  members: MemberDataType[] | undefined;
  setLoginMember: React.Dispatch<
    React.SetStateAction<MemberDataType[] | undefined>
  >;
  loginMember: MemberDataType[] | undefined;
  loginMemberName: string;
};

// 찜한 목록 컨테이너 Props 타입
export type ProfileWishContainerPropsType = {
  loginMember: MemberDataType[] | undefined;
  isMember?: boolean;
  setWishState: React.Dispatch<React.SetStateAction<boolean>>;
  wishState: boolean;
  wishMSGModal: "opacity-0" | "opacity-100";
  setWishMSGModal: React.Dispatch<
    React.SetStateAction<"opacity-0" | "opacity-100">
  >;
  isWish: boolean;
  setIsWish: React.Dispatch<React.SetStateAction<boolean>>;
  setViewingHistory: React.Dispatch<React.SetStateAction<MainData[]>>;
  title: "시청기록" | "찜한 콘텐츠";
  setLoginMember: React.Dispatch<
    React.SetStateAction<MemberDataType[] | undefined>
  >;
  viewingHistory: MainData[];
  setMemberData: React.Dispatch<
    React.SetStateAction<MemberResponseType | null>
  >;
  memberData?: MemberResponseType | null;
};

// 메인 계정 모달 Props 타입
export type MemberConvertModalPropstype = {
  setLoginMember: React.Dispatch<
    React.SetStateAction<MemberDataType[] | undefined>
  >;
  setMemberConvertModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMember?: boolean;
  userEmail?: string;
  setIsMeber: React.Dispatch<React.SetStateAction<boolean>>;
};

// 찜목록 삭제 , 추가 메세지 모달 Props 타입
export type WishModalPropsType = {
  message: "추가" | "삭제";
  opacity: "opacity-0" | "opacity-100";
};
