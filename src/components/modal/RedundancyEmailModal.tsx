import { memberDeleteBox } from "../../style/modal/memberDelete";
import { modalContainerStyle } from "../../style/modal/modal";
import { RedundancyEmailPropsType } from "../../type/props/propfile";
import Overlay from "../atom/bg/Overlay";
import SmallBtn from "../atom/button/SmallBtn";
import SmallText from "../atom/text/SmallText";
import SubTitle from "../atom/text/SubTitle";

// 중복 이메일 모달
const RedundancyEmailModal = ({
  setIsRedundancyEmail,
}: RedundancyEmailPropsType) => {
  return (
    <div className={`${modalContainerStyle}`}>
      <Overlay />
      <div className={`${memberDeleteBox} gap-14`}>
        <SubTitle text={`중복된 이메일입니다!`} />
        <SmallText text="다른 이메일로 입력해주세요." />
        <div onClick={() => setIsRedundancyEmail(false)}>
          <SmallBtn text="다시 입력하기" bgColor="bg-main_Red" />
        </div>
      </div>
    </div>
  );
};

export default RedundancyEmailModal;
