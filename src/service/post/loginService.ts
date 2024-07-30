import axios from "axios";
import { responseError } from "../../util/error/service/responseError";
import { axiosError } from "../../util/error/service/axiosError";
import {
  LoginDataType,
  LoginResponseType,
} from "../../type/service/post/login";

// 로그인 서비스
export const loginService = async (loginData: LoginDataType) => {
  try {
    const response = await axios
      .post<LoginResponseType>(
        `https://ott-ss.azurewebsites.net/auth/login`,
        loginData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT 토큰을 헤더에 포함
          },
        }
      )
      .then((res) => res.data);

    // 토큰 추출
    const token = response.data;
    // 로컬 스토리지에 토큰 저장
    localStorage.setItem("token", token);
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
