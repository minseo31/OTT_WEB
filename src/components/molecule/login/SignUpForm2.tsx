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
import SignMembershipBox from "./SIgnMembershipBox";
import { SignLevelState } from "../../../type/state";
import { handleSignLevel } from "../../../event/login/signLevelEvent";

// 가입하기 2단계 (멤버쉽 선택)
const SignUpForm2 = ({
  setSignLevel,
  setSignUpData,
  signUpData,
  setMembershipName,
}: SignLevelState) => {
  // 모달 오픈 상태
  const [openModal, setOpenModal] = useState<boolean>(false);

  // 모달 데이터 추적
  const [membership, setMembership] = useState<
    "p_membership" | "s_membership" | "a_membership"
  >("p_membership");

  // 현재 인덱스 상태
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [membershipBox, setMembershipBox] = useState<any[]>(
    signupData2.membership_data
  );

  useEffect(() => {
    // 초기 멤버십 이름 설정
    setMembershipName(signupData2.membership_data[0].id);
  }, [setMembershipName]);

  useEffect(() => {
    // 멤버쉽 가격
    const membershipAmount =
      membership === "a_membership"
        ? 5500
        : membership === "s_membership"
        ? 13500
        : 17000;

    // 데이터 저장
    setSignUpData((prev) => {
      return {
        name: prev.name,
        email: prev.email,
        password: prev.password,
        card_name: prev.card_name,
        card_number: prev.card_number,
        amount: membershipAmount,
        expiry_date: prev.expiry_date,
      };
    });
  }, [membership, setSignUpData]);

  const prevMembership = () => {
    setMembershipBox((prev) => {
      const lastElement = prev[prev.length - 1]; // 배열의 마지막 요소를 가져옴
      const rest = prev.slice(0, prev.length - 1); // 배열의 처음부터 마지막 요소 이전까지의 요소를 복사하여 rest 배열에 저장
      return [lastElement, ...rest]; // 마지막 요소를 맨 앞에 추가하여 새로운 배열을 반환
    });
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const nextMembership = () => {
    setMembershipBox((prev) => {
      const [first, ...rest] = prev; // 배열의 첫 번째 요소를 추출하고 나머지 요소를 rest 배열에 저장
      return [...rest, first];
    });
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <div className={`${signupFormStyle}`}>
      {/* 멤버쉽 교체 버튼  */}
      <div className={`${signMembershipNextBoxStyle}`}>
        <Arrowicon onClick={prevMembership} direction="rotate-180" />
        <Arrowicon onClick={nextMembership} direction="rotate-0" />
      </div>
      <Fulllogo width="w-[300px]" height="h-[150px]" />
      <SmallText text={signupData2.level} />
      <MainTitle text={signupData2.title} />
      {/* 멤버쉽 */}
      <div className={`${signMembershipContainerStyle}`}>
        {membershipBox.map((membershipData, i) => (
          <SignMembershipBox
            key={membershipData.id} // 각 요소에 고유한 키 추가
            MembershipData={membershipData}
            membership={membershipData.id}
            openModal={openModal}
            setOpenModal={setOpenModal}
            setMembership={setMembership}
          />
        ))}
      </div>

      {/* 선택하기 버튼 */}
      <div onClick={() => handleSignLevel(setSignLevel, 3)}>
        <FormBtn text={signupData2.btn_text} bgColor="bg-main_Red" />
      </div>
    </div>
  );
};

export default SignUpForm2;
