import axios from "axios";
import {
  UserWishDelDataType,
  UserWishDelResponseType,
} from "../../type/service/delete/userWishDel";
import { responseError } from "../../util/error/service/responseError";
import { axiosError } from "../../util/error/service/axiosError";

// 유저 찜목록 삭제 서비스
/*
    유저 찜목록 삭제 데이터 정보 
        email: string;    유저 식별 이메일
        movieID: number;  삭제할 영화 id
*/
export const fetchUserWishDel = async (
  userWishDelData: UserWishDelDataType
): Promise<UserWishDelResponseType> => {
  try {
    const response = await axios
      .delete<UserWishDelResponseType>(
        `https://ott-server-fthqbeejaye7ewfy.koreacentral-01.azurewebsites.net/wishlist/user/delete?email=${userWishDelData.email}&movieID=${userWishDelData.movieID}`,
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
