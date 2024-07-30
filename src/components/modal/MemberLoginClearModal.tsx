import { memberDeleteBox } from "../../style/modal/memberDelete";
import { modalContainerStyle } from "../../style/modal/modal";
import { MemberLoginModalClaerPropsType } from "../../type/props/propfile";
import { memberLogin } from "../../util/validation/profile/memberLogin";
import Overlay from "../atom/bg/Overlay";
import SmallBtn from "../atom/button/SmallBtn";
import SubTitle from "../atom/text/SubTitle";

// 멤버 로그인 성공 모달
const MemberLoginClaerModal = ({
  setMemberLoginModalOpen,
  setIsMeber,
  setMemberLoginOpen,
  setUserEmail,
  loginMemberEmail,
  setUserPW,
  pw,
  members,
  setLoginMember,
  loginMember,
  loginMemberName,
}: MemberLoginModalClaerPropsType) => {
  // 멤버 로그인 이벤트
  const handleMemberLogin = () => {
    // 프로필 데이터를 로그인 멤버 데이터로 변경
    memberLogin(members, loginMemberEmail, setLoginMember, loginMember);

    setMemberLoginModalOpen(false); // 멤버 로그인 폼 닫기
    setMemberLoginOpen(false); // 멤버 로그인 성공 모달
    setIsMeber(true); // 멤버 계정으로 로그인 함
  };

  return (
    <div className={`${modalContainerStyle}`}>
      <Overlay />
      <div className={`${memberDeleteBox} gap-14`}>
        <SubTitle text={`'${loginMemberName}' 멤버로 전환 하였습니다`} />
        <div onClick={handleMemberLogin}>
          <SmallBtn text="확인" bgColor="bg-main_Red" />
        </div>
      </div>
    </div>
  );
};

export default MemberLoginClaerModal;
