import axios from "axios";
import {
  UserPasswordDataType,
  UserPasswordResponseType,
} from "../../type/service/put/userPwChange";
import { responseError } from "../../util/error/service/responseError";
import { axiosError } from "../../util/error/service/axiosError";

// 유저 비밀번호 변경 서비스
/*
    유저 비밀번호 변경 데이터 정보
        userID: number;       변경하려는 유저 id
        newPassword: string;  새로운 비밀번호
*/
export const fetchUserPasswordChange = async (
  userPwData: UserPasswordDataType
): Promise<UserPasswordResponseType> => {
  try {
    const response = await axios
      .put<UserPasswordResponseType>(
        `https://ott-server-fthqbeejaye7ewfy.koreacentral-01.azurewebsites.net/member/changePassword`,
        userPwData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT 토큰을 헤더에 포함
          },
        }
      )
      .then((r) => r.data);
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
