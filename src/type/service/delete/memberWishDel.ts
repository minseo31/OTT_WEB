// 멤버 찜목록 삭제 요청 타입
export type MemberWishDelResponseType = {
  status: string;
  message: string;
  data: null;
};

// 멤버 찜목록 삭제 데이터 타입
export type MemberWishDelDataType = {
  email: string | null;
  movieID: number;
};
