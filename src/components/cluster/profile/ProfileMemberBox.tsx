import { handleMemberDelEvent } from "../../../event/profile/memberModalEvent";
import { profileMemberBoxStyle } from "../../../style/molecule/profile/box";
import { ProfileMemberBoxPropsType } from "../../../type/props/propfile";
import SmallBtn from "../../atom/button/SmallBtn";
import SubText from "../../atom/text/SubText";

// 프로필 멤버 박스
const ProfileMemberBox = ({
  member,
  setMemberDelModal,
  setDeleteMember,
  setMemberLoginOpen,
  setLoginMemberEmail,
  setLoginMemberName,
  setMemberAccessModal,
  isMember,
}: ProfileMemberBoxPropsType) => {
  return (
    <div className={`${profileMemberBoxStyle}`}>
      <SubText text={member.member_name} align="text-center" />
      <div
        onClick={() => {
          setMemberLoginOpen(true);
          setLoginMemberEmail(member.member_email);
          setLoginMemberName(member.member_name);
        }}
      >
        <SmallBtn text="멤버 전환" bgColor="bg-main_Red" />
      </div>
      <div
        onClick={() => {
          isMember
            ? setMemberAccessModal(true)
            : handleMemberDelEvent(setMemberDelModal, member, setDeleteMember);
        }}
      >
        <SmallBtn text="멤버 삭제" bgColor="bg-black1_07" />
      </div>
    </div>
  );
};

export default ProfileMemberBox;
