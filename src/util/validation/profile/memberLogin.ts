import { MemberDataType } from "../../../type/service/get/member";

// 멤버 로그인
export const memberLogin = (
  members: MemberDataType[] | undefined,
  loginEmail: string,
  setLoginMember: React.Dispatch<
    React.SetStateAction<MemberDataType[] | undefined>
  >,
  loginMember: MemberDataType[] | undefined
) => {
  const filterMember = members?.filter((member) => {
    return member.member_email === loginEmail;
  });
  setLoginMember(filterMember);

  if (filterMember) {
    localStorage.setItem("loginEmail", filterMember[0].member_email);
    localStorage.setItem("loginData", JSON.stringify(filterMember));
  }
};
