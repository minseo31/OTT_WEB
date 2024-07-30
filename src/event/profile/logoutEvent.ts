import { NavigateFunction } from "react-router-dom";

// 로그아웃 모달 오픈 이벤트
export const logoutModalOpenEvnet = (
  setLogoutModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  // 로그아웃 모달 오픈
  setLogoutModalOpen((prev) => !prev);
};

// 로그아웃 이벤트
export const logoutEvnet = (
  navigation: NavigateFunction,
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>,
  bool: boolean,
  setLogoutModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!bool) {
    // 로그아웃 상태로 변경
    setIsLogin(false);
    // 로컬 스토리지에 로그아웃 상태로 변경
    localStorage.setItem("loginState", "fasle");
    localStorage.removeItem("token");
    localStorage.removeItem("loginEmail");
    localStorage.removeItem("MainMemberData");
    localStorage.removeItem("LoginData");
    localStorage.removeItem("MainMemberData");
    localStorage.removeItem("MemberData");
    // 홈 페이지로 이동
    navigation("/");
  }
  // 로그아웃 모달 닫기
  setLogoutModalOpen(false);
};
