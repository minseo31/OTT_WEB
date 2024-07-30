// 유저 비밀번호 변경 요청 타입
export type UserPasswordResponseType = {
  status: string;
  message: string;
  data: null;
};

// 유저 비밀번호 변경 데이터 타입
export type UserPasswordDataType = {
  userID: number;
  newPassword: string;
};
