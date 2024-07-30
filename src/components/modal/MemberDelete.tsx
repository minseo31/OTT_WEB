import {
  handelMemberDeleteEvent,
  handelMemberDelModalCloseEvent,
} from "../../event/profile/memberModalEvent";
import {
  memberDeleteBox,
  memberDeleteTitleBoxStyle,
} from "../../style/modal/memberDelete";
import { modalContainerStyle } from "../../style/modal/modal";
import {
  ProfileMemberDelModalPropsType,
} from "../../type/props/propfile";
import Overlay from "../atom/bg/Overlay";
import SmallBtn from "../atom/button/SmallBtn";
import Fulllogo from "../atom/logo/Fulllogo";
import SmallText from "../atom/text/SmallText";
import SubTitle from "../atom/text/SubTitle";
import BtnBox from "../molecule/BtnBox";

// 멤버 삭제 모달
const MemberDelete = ({
  deleteMember,
  setMemberDelModal,
}: ProfileMemberDelModalPropsType) => {
  return (
    <div className={`${modalContainerStyle}`}>
      <Overlay />
      <div className={`${memberDeleteBox}`}>
        <SubTitle
          text={`멤버 ${deleteMember?.member_name}님을 삭제하시겠습니다까?`}
        />
        <div className={`${memberDeleteTitleBoxStyle}`}>
          <SmallText text="삭제 후 더이상 해당 멤버는" />
          <Fulllogo width="w-[80px]" height="h-[40px]" />
          <SmallText text="의" />
        </div>
        <SmallText text="콘텐츠를 시청하실 수 없습니다!" />
        <BtnBox>
          <div onClick={() => handelMemberDeleteEvent(deleteMember)}>
            <SmallBtn text="멤버삭제" bgColor="bg-main_Red" />
          </div>
          <div
            onClick={() => handelMemberDelModalCloseEvent(setMemberDelModal)}
          >
            <SmallBtn text="삭제취소" bgColor="bg-black1_07" />
          </div>
        </BtnBox>
      </div>
    </div>
  );
};

export default MemberDelete;
