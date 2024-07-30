import { MainData } from "../../data/MainData";

// 영화 서버 요청 데이터 타입
export type MovieResponseType = {
  status: string;
  message: string;
  data: MainData[];
};

