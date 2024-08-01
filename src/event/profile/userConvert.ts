import { MemberDataType } from "../../type/service/get/member";

// 메인 계정으로 전환 이벤트
export const userConvert = (
  setLoginMember: React.Dispatch<
    React.SetStateAction<MemberDataType[] | undefined>
  >,
  setMemberConvertModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  userEmail: string | undefined,
  setIsMeber: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const mainData = localStorage.getItem("MainMemberData");

  //   로컬 스토리지에 메인 계정 데이터가 있다면
  if (mainData) {
    userEmail && localStorage.setItem("loginEmail", userEmail);
    const mainEmail = localStorage.getItem("userEmail");

    const mainMemberData = JSON.parse(mainData); //  변환
    // 메인 계정의 데이터를 저장
    localStorage.setItem("LoginData", JSON.stringify(mainMemberData));
    // 로그인 이메일 변경
    mainEmail && localStorage.setItem("loginEmail", mainEmail);
    // 모달 닫기
    setMemberConvertModalOpen(false);
    // 로그인 유저 데이터 변경
    setLoginMember(mainMemberData);
    // 멤버 로그인 상태 변경
    setIsMeber(false);

    localStorage.setItem("isMember", "false");
  }
};
