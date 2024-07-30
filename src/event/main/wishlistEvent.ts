import { fetchMemberWishDelete } from "../../service/delete/memberWishDelService";
import { fetchUserWishDel } from "../../service/delete/userWishDelService";

import { fetchMemberWishAdd } from "../../service/post/memberWishAddService";
import { fetchUserWishAdd } from "../../service/post/userWishAddService";
import { MemberDataType } from "../../type/service/get/member";

// 위시리스트 추가 , 삭제 이벤트
export const wishlistEvent = async (
  bool: boolean | undefined,
  setIsWish: React.Dispatch<React.SetStateAction<boolean>>,
  movieId: number,
  isMember: boolean | undefined,
  loginMember: MemberDataType[] | undefined,
  setWishState: React.Dispatch<React.SetStateAction<boolean>>,
  setWishMSGModal: React.Dispatch<
    React.SetStateAction<"opacity-0" | "opacity-100">
  >
) => {
  // 현재 로그인 중인 이메일
  const email = localStorage.getItem("loginEmail");

  // 요청 데이터
  const userWishData = {
    email: email,
    movieID: movieId,
  };

  //  추가 이벤트
  if (!bool) {
    isMember
      ? await fetchMemberWishAdd(userWishData) // 멤버
      : await fetchUserWishAdd(userWishData); // 메인 계정
  }
  //  삭제 이벤트
  else {
    isMember
      ? await fetchMemberWishDelete(userWishData) // 멤버
      : await fetchUserWishDel(userWishData); // 메인 계정
  }
  // 찜 버튼 상태 변경
  setIsWish((prev) => !prev);
  setWishState((prev) => !prev);

  setWishMSGModal("opacity-100");
  // 타이머 ID를 저장
  const timer = setTimeout(() => {
    setWishMSGModal("opacity-0");
  }, 2000);

  // 클린업 함수
  return () => clearTimeout(timer);

  localStorage.setItem("loginData", JSON.stringify(loginMember));
};
