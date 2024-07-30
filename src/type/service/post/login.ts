// 로그인 요청 타입
export type LoginResponseType = {
  status: string;
  message: string;
  data: string;
};

// 로그인 정보 데이터 타입
export type LoginDataType = {
  email: string;
  password: string;
};
