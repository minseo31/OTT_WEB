import { useEffect, useState } from "react";
import { signupCompleteData } from "../../../data/loginDatas";
import { handleSignLevel } from "../../../event/login/signLevelEvent";
import { signupFormStyle } from "../../../style/molecule/login/container";
import { SignLevelState } from "../../../type/state";
import FormBtn from "../../atom/button/FormBtn";
import Fulllogo from "../../atom/logo/Fulllogo";
import MainTitle from "../../atom/text/MainTitle";
import SubText from "../../atom/text/SubText";
import SubTitle from "../../atom/text/SubTitle";

// 가입완료 폼
const SignCompleted = ({
  setSignLevel,
  signUpData,
  membershipName,
}: SignLevelState) => {
  // 선택한 멤버쉽 값
  const [membership, setMembership] = useState<
    "프리미엄(premium)" | "스탠다드(standard)" | "광고형 스탠다드(standard AD)"
  >("프리미엄(premium)");

  // 선택한 멤버쉽에 해당한 멤버쉽 이름 찾기
  useEffect(() => {
    membershipName === "p_membership"
      ? setMembership("프리미엄(premium)")
      : membershipName === "s_membership"
      ? setMembership("스탠다드(standard)")
      : setMembership("광고형 스탠다드(standard AD)");
  }, [membershipName]);

  return (
    <div className={`${signupFormStyle}`}>
      <Fulllogo width="w-[300px]" height="h-[150px]" />
      <MainTitle text={signupCompleteData.title} />
      <SubTitle text={`환영합니다  ${signUpData?.name}님`} />
      <SubText
        text={`${membership} 멤버쉽으로 가입완료하였습니다.`}
        align="text-center"
      />
      <SubText text={signupCompleteData.message} align="text-center" />

      {/* 로그인하러가기하기 버튼 */}
      <div onClick={() => handleSignLevel(setSignLevel, 0)}>
        <FormBtn text={signupCompleteData.btn_text} bgColor="bg-main_Red" />
      </div>
    </div>
  );
};

export default SignCompleted;
