// 회원가입 데이터 요청 타입
export type UserAddResponseType = {
  status: string;
  message: string;
  data: UserAddDataType;
};

// 회원가입한 유저 데이터 타입
export type UserAddDataType = {
  name: string;
  email: string;
  password: string;
  card_number: string;
  expiry_date: string;
  card_name: string;
  amount: 5500 | 13500 | 17000;
};
