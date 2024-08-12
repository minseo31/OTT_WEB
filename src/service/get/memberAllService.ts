import axios from "axios";
import { MemberResponseType } from "../../type/service/get/member";
import { axiosError } from "../../util/error/service/axiosError";
import { responseError } from "../../util/error/service/responseError";

// 로그인 한 유저의 데이터를 서버 요청함 (email = 로그인 한 유저)
export const fetchMember = async (
  email: string | null
): Promise<MemberResponseType> => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios
      .get<MemberResponseType>(
        `https://ott-server-fthqbeejaye7ewfy.koreacentral-01.azurewebsites.net/member/member?email=${email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // JWT 토큰을 헤더에 포함
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
