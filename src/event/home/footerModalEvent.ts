import { IsSideBarOpenStateType } from "../../type/state";

// 쿠키 모달 오픈 상태
export const handleCookieModalOpen = (
  setModal: IsSideBarOpenStateType,
  setCookie: React.Dispatch<React.SetStateAction<string>>,
  setPolicyModal: IsSideBarOpenStateType,
  text: string,
  bool: boolean,
  setCookieMessage: React.Dispatch<
    React.SetStateAction<"쿠키를 허용하였습니다" | "쿠키가 차단되었습니다">
  >,
  setCookieOpacity: React.Dispatch<
    React.SetStateAction<"opacity-0" | "opacity-100">
  >
) => {
  // 쿠키 허용
  if (bool) {
    setCookieMessage("쿠키를 허용하였습니다");
    text === "쿠키설정" && setModal((prev) => !prev);
  }
  // 쿠키 차단
  else {
    setCookieMessage("쿠키가 차단되었습니다");
    text === "쿠키설정" && setModal((prev) => !prev);
  }

  setPolicyModal((prev) => !prev);
  setCookie(text);

  // 쿠키 메세지 타이머
  setCookieOpacity("opacity-100");
  // 타이머 ID를 저장
  const timer = setTimeout(() => {
    setCookieOpacity("opacity-0");
  }, 2000);

  // 클린업 함수
  return () => clearTimeout(timer);
};
