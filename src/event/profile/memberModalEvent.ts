import { fetchMemberDel } from "../../service/delete/memberDelService";
import { fetchMemberAdd } from "../../service/post/memberAddService";
import { MemberDataType } from "../../type/service/get/member";

// 멤버 삭제 모달 오픈 이벤트
export const handleMemberDelEvent = (
  setMemberDelModal: React.Dispatch<React.SetStateAction<boolean>>,
  member: MemberDataType,
  setDeleteMember: React.Dispatch<
    React.SetStateAction<MemberDataType | undefined>
  >
) => {
  setMemberDelModal((prev) => !prev); // 멤버
  setDeleteMember(member);
};

// 멤버 삭제 이벤트
export const handelMemberDeleteEvent = async (
  deleteMember: MemberDataType | undefined
) => {
  // 삭제할 멤버의 데이터(parms) 정의
  const memberDelData = { memberID: deleteMember?.profile_id };

  if (memberDelData) {
    console.log(`${deleteMember?.member_name} 멤버를 삭제 중 입니다.`);
    await fetchMemberDel(memberDelData);

    // 페이지 재로드
    window.location.reload();
  }
};

// 멤버 삭제 모달 닫기 이벤트
export const handelMemberDelModalCloseEvent = (
  setMemberDelModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setMemberDelModal((prev) => !prev);
};
// --------------------------------------------------

// 멤버 추가 이벤트
export const MemberAddEvent = async (
  memberName: string,
  memberEmail: string,
  memberPw: string,
  check1: boolean,
  loginMember: MemberDataType[] | undefined,
  emailData: string[] | undefined,
  setIsRedundancyEmail: React.Dispatch<React.SetStateAction<boolean>>,
  setAddMemberModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  // 데이터 존재 검사
  if (memberName && memberEmail && memberPw && check1 && emailData) {
    // 중복 이메일인지 검사
    const RedundancyEmail = emailData.filter((email) => {
      return email === memberEmail;
    });

    // 중복 이메일이 아니라면 서버 요청
    if (RedundancyEmail.length === 0) {
      // 멤버 추가 요청 데이터
      const memberData = {
        member_name: memberName,
        member_email: memberEmail,
        member_password: memberPw,
        member_id: loginMember?.[0].id,
      };

      // 서버 요청
      await fetchMemberAdd(memberData);
      // 멤버 추가 완료 모달 오픈
      setAddMemberModalOpen(true);
    } else {
      // 중복 이메일이라면 상태 변경
      setIsRedundancyEmail(true);
    }
  }
};

// 멤버 추가 모달 오픈 이벤트
export const handelMemberAddEvent = (
  setMemberAddMadal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setMemberAddMadal((prev) => !prev);
};
