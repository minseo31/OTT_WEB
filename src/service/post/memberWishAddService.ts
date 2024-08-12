import axios from "axios";
import {
  MemberWishAddDataType,
  MemberWishAddResponseType,
} from "../../type/service/post/memberWishAdd";
import { responseError } from "../../util/error/service/responseError";
import { axiosError } from "../../util/error/service/axiosError";

// 멤버 찜목록 추가 서비스
/*
    멤버 찜목록 추가 데이터 정보
        email: string;    멤버를 식별할 이메일
        movieID: number;  찜목록에 추가될 영화 id
*/
export const fetchMemberWishAdd = async (
  memberWishData: MemberWishAddDataType
): Promise<MemberWishAddResponseType> => {
  try {
    const response = await axios
      .post<MemberWishAddResponseType>(
        `https://ott-server-fthqbeejaye7ewfy.koreacentral-01.azurewebsites.net/wishlist/member/add`,
        memberWishData,
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
