import { memberDeleteBox } from "../../style/modal/memberDelete";
import { modalContainerStyle } from "../../style/modal/modal";
import Overlay from "../atom/bg/Overlay";
import SmallBtn from "../atom/button/SmallBtn";
import SubTitle from "../atom/text/SubTitle";

type PropsTpye = {
  setMemberLimitModal: React.Dispatch<React.SetStateAction<boolean>>;
};

// 멤버 제한 모달
const MemberLimitModal = ({ setMemberLimitModal }: PropsTpye) => {
  return (
    <div className={`${modalContainerStyle}`}>
      <Overlay />
      <div className={`${memberDeleteBox}`}>
        <span className="p-4">
          <SubTitle text="더이상 멤버를 추가할 수 없습니다!" />
        </span>
        <div
          className="relative z-[999]"
          onClick={() => setMemberLimitModal(false)}
        >
          <SmallBtn text="뒤로가기" bgColor="bg-main_Red" />
        </div>
      </div>
    </div>
  );
};

export default MemberLimitModal;
