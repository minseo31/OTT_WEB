import { AxiosResponse } from "axios";

// 네트워크 문제 + axios문제
export const axiosError = (res: AxiosResponse<any, any> | undefined) => {
  if (!res) {
    // 네트워크 에러
    console.error("네트워크 에러: 서버에 연결할 수 없습니다.", res);
    return;
  }
  return;
};
