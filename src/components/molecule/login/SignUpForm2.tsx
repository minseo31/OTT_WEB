import { useEffect, useState } from "react";
import { signupData2 } from "../../../data/loginDatas";
import {
  signMembershipContainerStyle,
  signMembershipNextBoxStyle,
  signupFormStyle,
} from "../../../style/molecule/login/container";
import FormBtn from "../../atom/button/FormBtn";
import Fulllogo from "../../atom/logo/Fulllogo";
import MainTitle from "../../atom/text/MainTitle";
import SmallText from "../../atom/text/SmallText";
import Arrowicon from "../../icon/Arrowicon";
import { SignLevelState } from "../../../type/state";
import { handleSignLevel } from "../../../event/login/signLevelEvent";
import SignMembershipBox from "./SIgnMembershipBox";

// 가입하기 2단계 (멤버쉽 선택)
const SignUpForm2 = ({
  setSignLevel,
  setSignUpData,
  signUpData,
  setMembershipName,
}: SignLevelState) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [membership, setMembership] = useState<
    "p_membership" | "s_membership" | "a_membership"
  >("p_membership");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [membershipBox, setMembershipBox] = useState<any[]>(
    signupData2.membership_data
  );

  useEffect(() => {
    setMembershipName(membershipBox[0].id);
  }, [setMembershipName, membershipBox]);

    useEffect(() => {
    setMembershipName(membershipBox[0].id);
  }, [setMembershipName, membershipBox]);

  useEffect(() => {
    const membershipAmount =
      membershipBox[1].id === "a_membership"
        ? 5500
        : membershipBox[1].id === "s_membership"
        ? 13500
        : 17000;

    setSignUpData((prev) => ({
      ...prev,
      amount: membershipAmount,
    }));
  }, [membership, setSignUpData, membershipBox]);

  const prevMembership = () => {
    setMembershipBox((prev) => {
      const lastElement = prev[prev.length - 1];
      const rest = prev.slice(0, prev.length - 1);
      return [lastElement, ...rest];
    });
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const nextMembership = () => {
    setMembershipBox((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const handleModalOpen = (
    id: "p_membership" | "s_membership" | "a_membership"
  ) => {
    setMembership(id);
    setOpenModal(true);
  };

  return (
    <div className={`${signupFormStyle}`}>
      <div className={`${signMembershipNextBoxStyle}`}>
        <Arrowicon onClick={prevMembership} direction="rotate-180" />
        <Arrowicon onClick={nextMembership} direction="rotate-0" />
      </div>
      <Fulllogo width="w-[300px]" height="h-[150px]" />
      <SmallText text={signupData2.level} />
      <MainTitle text={signupData2.title} />
      <div className={`${signMembershipContainerStyle}`}>
        {membershipBox.map((membershipData) => (
          <SignMembershipBox
            key={membershipData.id}
            MembershipData={membershipData}
            membership={membership}
            openModal={openModal}
            setOpenModal={setOpenModal}
            setMembership={handleModalOpen} // Pass handleModalOpen function
          />
        ))}
      </div>
      <div         
        onClick={() => {
          handleSignLevel(setSignLevel, 3);
          setMembershipName(membershipBox[1].id);
        }}>
        <FormBtn text={signupData2.btn_text} bgColor="bg-main_Red" />
      </div>
    </div>
  );
};

export default SignUpForm2;
