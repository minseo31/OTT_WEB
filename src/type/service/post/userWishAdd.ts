// 유저 찜목록 추가 요청 타입
export type UserWishAddResponseType = {
  status: string;
  message: string;
  data: UserWishAddDataType;
};

// 유저 찜목록 데이터 타입
export type UserWishAddDataType = {
  email: string | null;
  movieID: number;
};
