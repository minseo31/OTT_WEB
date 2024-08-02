import { handleMembershipModalOpen } from "../../event/login/modalOpenEvent";
import {
  signMembershipListBg1Style,
  signMembershipListBg3Style,
  signmembershipListBoxStyle,
  signMembershipListStyle,
  signMembershipModalBoxStlye,
  signMembershipModalInfoBoxStyle,
  signMembershipModalStyle,
} from "../../style/modal/signMembershipModal";
import { SignMembershipBoxPropsType } from "../../type/props/login";
import Overlay from "../atom/bg/Overlay";
import ModalBtn from "../atom/button/ModalBtn";
import MainText from "../atom/text/MainText";
import SubText from "../atom/text/SubText";
import Section3MembershipLabel from "../molecule/home/section3/Section3MembershipLabel";

// 가입하기 멤버쉽 모달
const SignMembershipModal = ({
  MembershipData,
  openModal,
  setOpenModal,
  setMembership,
  membership,
}: SignMembershipBoxPropsType) => {
  console.log(membership);
  return (
    <div className={`${signMembershipModalStyle}`}>
      <Overlay />
      <div className={`${signMembershipModalBoxStlye}`}>
        <div className={`${signMembershipModalInfoBoxStyle}`}>
          <Section3MembershipLabel
            width="350px"
            height="100px"
            title1={MembershipData.name1}
            title2={MembershipData.name2}
          />
          <SubText text={MembershipData.info} align="text-center" />
        </div>
        <div className={`${signmembershipListBoxStyle}`}>
          {/* 멤버쉽 정보 리스트 */}
          {MembershipData.list_text.map((list, i) => (
            <div
              key={list.id}
              className={`${signMembershipListStyle} ${
                i % 2 === 0
                  ? signMembershipListBg1Style
                  : signMembershipListBg3Style
              }`}
            >
              <MainText text={list.list} align="text-start" />
            </div>
          ))}
        </div>
      </div>
      {/* 닫기 버튼 */}
      <div
        onClick={() =>
          handleMembershipModalOpen(
            setOpenModal,
            MembershipData.id,
            setMembership,
            false
          )
        }
      >
        <ModalBtn text="닫기" bgColor="bg-main_Red" />
      </div>
    </div>
  );
};

export default SignMembershipModal;

