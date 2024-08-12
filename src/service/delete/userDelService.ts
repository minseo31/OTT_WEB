import axios from "axios";
import {
  UserDelDataType,
  UserDelResponseType,
} from "../../type/service/delete/userDel";
import { responseError } from "../../util/error/service/responseError";
import { axiosError } from "../../util/error/service/axiosError";

// 유저 삭제 (계정 탈퇴) 서비스
/*
    유저 삭제 데이터 정보 
        memberID: number; 삭제할 유저의 이메일
*/
export const fetchUserDel = async (
  userDelData: UserDelDataType
): Promise<UserDelResponseType> => {
  try {
    const response = await axios
      .delete<UserDelResponseType>(
        `https://ott-server-fthqbeejaye7ewfy.koreacentral-01.azurewebsites.net/member/delete/${userDelData.memberID}`,
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
