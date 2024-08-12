import axios from "axios";
import { responseError } from "../../util/error/service/responseError";
import { axiosError } from "../../util/error/service/axiosError";
import { EmailResponseType } from "../../type/service/get/email";

// 전체 유저 + 멤버의 이메일 불러오기
export const emailService = async (): Promise<EmailResponseType> => {
  try {
    const response = await axios
      .get<EmailResponseType>(
        `https://ott-server-fthqbeejaye7ewfy.koreacentral-01.azurewebsites.net/member/allEmail`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT 토큰을 헤더에 포함
          },
        }
      )
      .then((res) => res.data);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      error.response
        ? responseError(error.response)
        : axiosError(error.response);
    } else {
      // 그 외의 에러
      console.error("알 수 없는 에러가 발생했습니다:", error);
    }
    throw error; // 에러를 다시 던져서 호출하는 곳에서 처리할 수 있게 합니다.
  }
};
