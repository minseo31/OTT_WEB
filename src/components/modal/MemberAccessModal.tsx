import { userConvert } from "../../event/profile/userConvert";
import {
  memberDeleteBox,
  memberDeleteTitleBoxStyle,
} from "../../style/modal/memberDelete";
import { modalContainerStyle } from "../../style/modal/modal";
import { MemberDataType } from "../../type/service/get/member";
import Overlay from "../atom/bg/Overlay";
import SmallBtn from "../atom/button/SmallBtn";
import SmallText from "../atom/text/SmallText";
import SubTitle from "../atom/text/SubTitle";
import BtnBox from "../molecule/BtnBox";

type PropsType = {
  setMemberAccessModal: React.Dispatch<React.SetStateAction<boolean>>;
  setLoginMember: React.Dispatch<
    React.SetStateAction<MemberDataType[] | undefined>
  >;
  setMemberConvertModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userEmail: string | undefined;
  setIsMeber: React.Dispatch<React.SetStateAction<boolean>>;
};

// 멤버 접근 제한 모달
const MemberAccessModal = ({
  setMemberAccessModal,
  setIsMeber,
  setLoginMember,
  setMemberConvertModalOpen,
  userEmail,
}: PropsType) => {
  return (
    <div className={`${modalContainerStyle}`}>
      <Overlay />
      <div className={`${memberDeleteBox}`}>
        <SubTitle text={`메인 계정 로그인 상태에서만 `} />
        <SubTitle text={`추가 및 삭제를 진행할 수 있습니다! `} />
        <BtnBox>
          <div
            onClick={() => {
              setMemberAccessModal(false);
              userConvert(
                setLoginMember,
                setMemberConvertModalOpen,
                userEmail,
                setIsMeber
              );
            }}
          >
            <SmallBtn text="메인 계정 전환" bgColor="bg-main_Red" />
          </div>
          <div onClick={() => setMemberAccessModal(false)}>
            <SmallBtn text="뒤로가기" bgColor="bg-black1_07" />
          </div>
        </BtnBox>
      </div>
    </div>
  );
};
export default MemberAccessModal;
