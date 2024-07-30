// 멤버 찜목록 추가 요청 타입
export type MemberWishAddResponseType = {
  status: string;
  message: string;
  data: MemberWishAddDataType;
};

// 멤버 찜목록 데이터 타입
export type MemberWishAddDataType = {
  email: string | null;
  movieID: number;
};
