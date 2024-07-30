import { useState } from "react";
import { handleMembershipModalOpen } from "../../../event/login/modalOpenEvent";
import { subTextStyile } from "../../../style/atom/text";
import {
  signMembershipBoxStyle,
  signMembershipTextBoxStyle,
} from "../../../style/molecule/login/container";
import { SignMembershipBoxPropsType } from "../../../type/props/login";
import SubText from "../../atom/text/SubText";
import SignMembershipModal from "../../modal/SignMembershipModal";
import Section3MembershipLabel from "../home/section3/Section3MembershipLabel";

// 가입하기 멤버쉽 선택 박스
const SignMembershipBox = ({
  MembershipData,
  openModal,
  setOpenModal,
  setMembership,
  membership,
}: SignMembershipBoxPropsType) => {
  return (
    <div className={`${signMembershipBoxStyle}`}>
      {/* 라벨 */}
      <Section3MembershipLabel
        width="350px"
        height="100px"
        title1={MembershipData.name1}
        title2={MembershipData.name2}
      />
      <div className={`${signMembershipTextBoxStyle}`}>
        <SubText text={MembershipData.info} align="text-center" />
      </div>
      <span
        className={`${subTextStyile} underline`}
        onClick={() =>
          handleMembershipModalOpen(
            setOpenModal,
            MembershipData.id,
            setMembership
          )
        }
      >
        자세히 알아보기
      </span>
      {/* 자세히 보기 모달 */}
      {openModal ? (
        MembershipData.id === membership && (
          <SignMembershipModal
            MembershipData={MembershipData}
            openModal={openModal}
            setOpenModal={setOpenModal}
            setMembership={setMembership}
            membership={membership}
          />
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default SignMembershipBox;
