// 유저 찜목록 삭제 요청 타입
export type UserWishDelResponseType = {
  status: string;
  message: string;
  data: null;
};

// 유저 찜목록 삭제 데이터 타입
export type UserWishDelDataType = {
  email: string | null;
  movieID: number;
};
