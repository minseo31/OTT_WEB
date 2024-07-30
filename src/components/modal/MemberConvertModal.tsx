
import { userConvert } from "../../event/profile/userConvert";
import { memberDeleteBox } from "../../style/modal/memberDelete";
import { modalContainerStyle } from "../../style/modal/modal";
import { MemberConvertModalPropstype } from "../../type/props/propfile";
import Overlay from "../atom/bg/Overlay";
import SmallBtn from "../atom/button/SmallBtn";
import SubTitle from "../atom/text/SubTitle";
import BtnBox from "../molecule/BtnBox";

// 메인 계정으로 전환 모달
const MemberConvertModal = ({
  setLoginMember,
  setMemberConvertModalOpen,
  isMember,
  userEmail,
  setIsMeber,
}: MemberConvertModalPropstype) => {
  // 메인 계정으로 로그인 상태 일떄
  if (!isMember) {
    return (
      <div className={`${modalContainerStyle}`}>
        <Overlay />
        <div className={`${memberDeleteBox} gap-14`}>
          <SubTitle text={`현재 메인 계정으로 로그인 상태입니다!`} />
          <div onClick={() => setMemberConvertModalOpen(false)}>
            <SmallBtn text="뒤로가기" bgColor="bg-main_Red" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${modalContainerStyle}`}>
      <Overlay />
      <div className={`${memberDeleteBox} gap-14`}>
        <SubTitle text={`메인 계정으로 전환하시겠습니까?`} />
        <BtnBox>
          <div
            onClick={() =>
              userConvert(
                setLoginMember,
                setMemberConvertModalOpen,
                userEmail,
                setIsMeber
              )
            }
          >
            <SmallBtn text="계정전환" bgColor="bg-main_Red" />
          </div>
          <div onClick={() => setMemberConvertModalOpen(false)}>
            <SmallBtn text="뒤로가기" bgColor="bg-black1_07" />
          </div>
        </BtnBox>
      </div>
    </div>
  );
};

export default MemberConvertModal;
