import { MemberDataType } from "../../../type/service/get/member";

// 중복된 member_email을 제거하는 함수
export const removeDuplicateEmails = (data: MemberDataType[] | undefined) => {
  const seen = new Set();
  return data?.filter((item) => {
    if (seen.has(item.member_email)) {
      return false; // 중복된 이메일이 있으면 필터링
    } else {
      seen.add(item.member_email);
      return true; // 새로운 이메일이면 추가
    }
  });
};
