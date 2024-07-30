import { AxiosResponse } from "axios";

// 응답 에러 400 ~ 500
export const responseError = (res: AxiosResponse<any, any> | undefined) => {
  // 에러 코드
  const status: number | undefined = res?.status;
  if (status) {
    if (status >= 400 && status < 500) {
      console.error(`클라이언트 에러 (${status}): 요청이 잘못되었습니다.`);
    } else if (status >= 500) {
      console.error(`서버 에러 (${status}): 서버에서 문제가 발생했습니다.`);
    }
  }
};
