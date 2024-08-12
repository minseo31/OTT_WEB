import axios from "axios";
import {
  UserAddDataType,
  UserAddResponseType,
} from "../../type/service/post/signup";
import { responseError } from "../../util/error/service/responseError";
import { axiosError } from "../../util/error/service/axiosError";

// 유저 회원가입 요청 서비스
/*
    유저 회원가입 시 필요한 유저 데이터 정보 (userData)
        name: string;           이름
        email: string;          이메일
        password: string;       비밀번호
        cardNumber: string;     카드번호
        expiryDate: string;     카드 유효 기간
        cardName: string;       카드 명의
        amount: number;         멤버쉽 금액 (결제 금액)
*/
export const fetchUserAdd = async (
  userData: UserAddDataType
): Promise<UserAddResponseType> => {
  console.log("서버요청", userData);

  try {
    // 서버 요청
    const response = await axios
      .post<UserAddResponseType>(
        `https://ott-server-fthqbeejaye7ewfy.koreacentral-01.azurewebsites.net/member/add`,
        userData,
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
