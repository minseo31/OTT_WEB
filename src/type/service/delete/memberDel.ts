// 멤버 삭제 요청 타입
export type MemberDelResponseType = {
  status: string;
  message: string;
  data: null;
};

// 멤버 삭제 데이터 타입
export type MemberDelDataType = {
  memberID: number | undefined;
};
