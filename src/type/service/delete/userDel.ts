// 유저 삭제 (계정 탈퇴)요청 타입
export type UserDelResponseType = {
    status: string;
    message: string;
    data: null;
  };
  
  // 유저 삭제 (계정 탈퇴) 데이터 타입
  export type UserDelDataType = {
    memberID: number;
  };
  