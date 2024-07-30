import {
  memberDeleteBox,
  memberDeleteTitleBoxStyle,
} from "../../style/modal/memberDelete";
import { modalContainerStyle } from "../../style/modal/modal";
import { ViewHistoryDelModalPropsType } from "../../type/props/main";
import Overlay from "../atom/bg/Overlay";
import SmallBtn from "../atom/button/SmallBtn";
import Fulllogo from "../atom/logo/Fulllogo";
import SmallText from "../atom/text/SmallText";
import SubTitle from "../atom/text/SubTitle";
import BtnBox from "../molecule/BtnBox";

// 시청 기록 삭제 모달
const ViewHistoryDelModal = ({
  setViewHistoryModalOpen,
  setViewingHistory,
}: ViewHistoryDelModalPropsType) => {
  return (
    <div className={`${modalContainerStyle}`}>
      <Overlay />
      <div className={`${memberDeleteBox}`}>
        <SubTitle text={`시청 기록을 모두 삭제하시겠습니까?`} />
        <div className={`${memberDeleteTitleBoxStyle}`}>
          <Fulllogo width="w-[80px]" height="h-[40px]" />
          <SmallText text="의 모든 시청기록이 삭제됩니다." />
        </div>
        <BtnBox>
          <div
            onClick={() => {
              // 시청기록 초기화
              setViewingHistory([]);
              localStorage.setItem("ViewingHistory", JSON.stringify([]));
              setViewHistoryModalOpen(false);
            }}
          >
            <SmallBtn text="삭제하기" bgColor="bg-main_Red" />
          </div>
          <div onClick={() => setViewHistoryModalOpen(false)}>
            <SmallBtn text="삭제취소" bgColor="bg-black1_07" />
          </div>
        </BtnBox>
      </div>
    </div>
  );
};

export default ViewHistoryDelModal;
