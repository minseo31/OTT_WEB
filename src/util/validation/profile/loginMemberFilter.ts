import { MemberDataType } from "../../../type/service/get/member";

// 메인 계정과 멤버 계정을 분리
export const loginMemberFilter = (
  memberData: MemberDataType[] | undefined | null,
  userEmail: string | null,
  isMember: boolean | undefined
) => {
  // 멤버 계정
  if (isMember) {
    const filterMember = memberData?.filter((member) => {
      return member.member_email !== userEmail;
    });

    return filterMember;
  }
  // 메인 계정
  else {
    const filterMember = memberData?.filter((member) => {
      return member.member_email === userEmail;
    });

    return filterMember;
  }
};

// 로그인 계정 데이터
export const loginUserData = (
  memberData: MemberDataType[] | undefined | null
) => {
  const filterMember = memberData?.filter((member) => {
    return member.member_email === localStorage.getItem("loginEmail");
  });

  return filterMember;
};
