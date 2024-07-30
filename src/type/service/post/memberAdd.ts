// 멤버 추가 요청 타입
export type MemberAddResponseType = {
  status: string;
  message: string;
  data: MemberAddDataType;
};

// 추가한 멤버 데이터 타입
export type MemberAddDataType = {
  member_name: string;
  member_email: string;
  member_password: string;
  member_id: number | undefined;
};
