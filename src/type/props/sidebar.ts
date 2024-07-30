import { MainData } from "../data/MainData";
import { SideBarCurrentPageStateType } from "../state";

// 사이드 바 리스트 Props 타입
export type SideBarListBoxPropsType = {
  text: "홈" | "프로필" | "멤버" | "장르별";
  icon: JSX.Element;
  isOpen: boolean;
  link: string;
  isPage: "s1" | "s2" | "s3" | "s4";
  setIsPage: SideBarCurrentPageStateType;
  id: "s1" | "s2" | "s3" | "s4";
};

// 시청 기록 컨테이너 Props 타입
export type viewingHistoryContainerPropsType = {
  viewingHistory: MainData[];
  setWishState: React.Dispatch<React.SetStateAction<boolean>>;
  wishState: boolean;
  setWishMSGModal: React.Dispatch<
    React.SetStateAction<"opacity-0" | "opacity-100">
  >;
  isWish: boolean;
  setIsWish: React.Dispatch<React.SetStateAction<boolean>>;
  setViewingHistory: React.Dispatch<React.SetStateAction<MainData[]>>;
  wishMSGModal: "opacity-0" | "opacity-100";
  isOpen: boolean;
};
