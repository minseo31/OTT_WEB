import axios from "axios";
import {
  MemberAddDataType,
  MemberAddResponseType,
} from "../../type/service/post/memberAdd";
import { responseError } from "../../util/error/service/responseError";
import { axiosError } from "../../util/error/service/axiosError";

// 멤버 추가 요청 서비스
/*
    멤버 데이터 정보 
        member_name: string;      멤버 이름
        member_email: string;     멤버 이메일
        member_password: string;  멤버 비밀번호
        member_id: number;        멤버 아이디
*/
export const fetchMemberAdd = async (
  memberData: MemberAddDataType
): Promise<MemberAddResponseType> => {
  try {
    const response = await axios
      .post<MemberAddResponseType>(
        `https://ott-ss.azurewebsites.net/memberprofile/add`,
        memberData,
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
