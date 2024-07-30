import {
  IsSideBarOpenStateType,
  SideBarCurrentPageStateType,
} from "../../type/state";

// 사이드 바 오픈 / 닫기 이벤트 핸들러
export const handleSideBarOpen = (set: IsSideBarOpenStateType) => {
  set((prev) => !prev);
};

// 사이드 바 리스트 클릭 시 현재 페이지 추적 핸들러
export const handelSideBarlistPage = (
  id: "s1" | "s2" | "s3" | "s4",
  set: SideBarCurrentPageStateType
) => {
  set(id);
};
