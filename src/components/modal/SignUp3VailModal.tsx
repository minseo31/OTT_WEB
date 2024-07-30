import { memberDeleteBox } from "../../style/modal/memberDelete";
import { modalContainerStyle } from "../../style/modal/modal";
import { SignUp3VailModalPropsType } from "../../type/props/login";
import Overlay from "../atom/bg/Overlay";
import SmallBtn from "../atom/button/SmallBtn";
import MainText from "../atom/text/MainText";

// 회원가입 3단계 유효성 검사 실패 모달
const SignUp3VailModal = ({ msg, setVailModal }: SignUp3VailModalPropsType) => {
  return (
    <div className={`${modalContainerStyle}`}>
      <Overlay />
      <div className={`${memberDeleteBox} gap-12`}>
        <MainText text={msg} align="text-center" />
        <div onClick={() => setVailModal(false)}>
          <SmallBtn text="확인" bgColor="bg-main_Red" />
        </div>
      </div>
    </div>
  );
};

export default SignUp3VailModal;
