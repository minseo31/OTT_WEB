import {
  IsSideBarOpenStateType,
  MembershgipModalStateType,
} from "../../type/state";

// 멤버쉽 자세히보기 모달 오픈 이벤트
export const handleMembershipModalOpen = (
  setOpenModal: IsSideBarOpenStateType,
  MembershipDataId: "p_membership" | "s_membership" | "a_membership",
  setMembership: MembershgipModalStateType
) => {
  setMembership(MembershipDataId);
  setOpenModal((prev) => !prev);
};
