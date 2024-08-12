import axios from "axios";
import {
  UserWishAddDataType,
  UserWishAddResponseType,
} from "../../type/service/post/userWishAdd";
import { responseError } from "../../util/error/service/responseError";
import { axiosError } from "../../util/error/service/axiosError";

// 유저 찜 목록 추가 서비스 요청
/*
    유저 찜목록 추가 정보 
        email: string;    유저 식별 이메일
        movieID: number;  찜목록에 추가할 영화 id
*/
export const fetchUserWishAdd = async (
  userWishData: UserWishAddDataType
): Promise<UserWishAddResponseType> => {
  try {
    const response = await axios
      .post<UserWishAddResponseType>(
        `https://ott-server-fthqbeejaye7ewfy.koreacentral-01.azurewebsites.net/wishlist/user/add`,
        userWishData,
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
