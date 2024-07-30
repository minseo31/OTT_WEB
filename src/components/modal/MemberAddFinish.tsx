import { memberDeleteBox } from "../../style/modal/memberDelete";
import { modalContainerStyle } from "../../style/modal/modal";
import { MemberAddFinishPropsType } from "../../type/props/propfile";
import Overlay from "../atom/bg/Overlay";
import SmallBtn from "../atom/button/SmallBtn";
import SubTitle from "../atom/text/SubTitle";

// 멤버 추가 완료 모달
const MemberAddFinish = ({
  setAddMemberModalOpen,
}: MemberAddFinishPropsType) => {
  return (
    <div className={`${modalContainerStyle}`}>
      <Overlay />
      <div className={`${memberDeleteBox} gap-14`}>
        <SubTitle text={`멤버를 추가하였습니다.`} />
        <div
          onClick={() => {
            setAddMemberModalOpen(false);
            // 추가된 데이터를 불러오기 위한 재로드
            window.location.reload();
          }}
        >
          <SmallBtn text="확인" bgColor="bg-main_Red" />
        </div>
      </div>
    </div>
  );
};

export default MemberAddFinish;
