// 멤버 비밀번호 변경 요청 타입
export type MemberPasswordResponseType = {
  status: string;
  message: string;
  data: null;
};

// 멤버 비밀번호 변경 데이터 타입
export type MemberPasswordDataType = {
  memberID: number;
  newPassword: string;
};
