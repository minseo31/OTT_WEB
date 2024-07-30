import { useEffect, useState } from "react";
import { modalContainerStyle } from "../../style/modal/modal";
import {
  memberAddErrorTextStyle,
  signupFormStyle,
} from "../../style/molecule/login/container";
import Overlay from "../atom/bg/Overlay";
import Fulllogo from "../atom/logo/Fulllogo";
import MainTitle from "../atom/text/MainTitle";
import CheckBox from "../atom/input/CheckBox";
import { profileMemberAddModalData } from "../../data/profileData";
import Input from "../atom/input/Input";
import { ProfileMemberAddPropsType } from "../../type/props/propfile";
import {
  handelMemberAddEvent,
  MemberAddEvent,
} from "../../event/profile/memberModalEvent";
import { formBtnStyle } from "../../style/atom/button";
import {
  isDisable,
  memberAddVali,
} from "../../util/error/profile/memberAddError";
import { MemberAddEventType } from "../../type/util/memberAddErrorType";
import RedundancyEmailModal from "./RedundancyEmailModal";
import MemberAddFinish from "./MemberAddFinish";

// 멤버 추가하기 모달
const MemberAdd = ({
  setMemberAddMadal,
  loginMember,
  emailData,
}: ProfileMemberAddPropsType) => {
  // input 입력값
  const [email, setEmail] = useState<string>("");
  // 추가할 멤버의 이름
  const [memberName, setMemberName] = useState<string>("");
  // 추가할 멤버의 이메일
  const [memberEmail, setMemberEmail] = useState<string>("");
  // 추가할 멤버의 비밀번호
  const [memberPw, setMemberPw] = useState<string>("");
  // input 추적할 인덱스
  const [inputIndex, setInputIndex] = useState<number>(0);

  // 추가할 멤버의 체크박스 체크 상태
  const [isCheck, setIsCheck] = useState<boolean>(false);
  // 첫 번째 체크박스
  const [check1, setCheck1] = useState<boolean>(false);
  // 두 번째 체크박스
  const [check2, setCheck2] = useState<boolean>(false);
  // 체크박스 추적할 인덱스
  const [checkIndex, setCheckIndex] = useState<number>(0);

  // 에러 값
  const [memberAddError, setMemberAddError] = useState<MemberAddEventType[]>();

  // 버튼 유효성 상태 값
  const [isErrors, setIsError] = useState<boolean[]>([false, false, false]);

  // 중복 이메일 상태
  const [isRedundancyEmail, setIsRedundancyEmail] = useState<boolean>(false);

  // 멤버 추가 완료 모달 오픈 상태
  const [addMemberModalOpen, setAddMemberModalOpen] = useState<boolean>(false);

  // 사용자의 입력값 저장 및 에러 상태 업데이트
  useEffect(() => {
    // 첫 번째 (멤버 이름 input)
    if (inputIndex === 0) {
      setMemberName(email);
    }
    // 두 번째 (멤버 이메일 input)
    if (inputIndex === 1) {
      setMemberEmail(email);
    }
    // 세 번째 (멤버 비밀번호 input)
    if (inputIndex === 2) {
      setMemberPw(email);
    }

    // 첫 번째 (체크박스)
    if (checkIndex === 0) {
      setCheck1(isCheck);
    }

    // 두 번째 (체크박스)
    if (checkIndex === 1) {
      setCheck2(isCheck);
    }

    // 사용자의 입력값 검사
    const errors = memberAddVali(memberName, memberEmail, memberPw, check1);
    setMemberAddError(errors);

    // 에러 상태 확인
    if (errors) {
      setIsError(isDisable(errors));
    }
  }, [
    isCheck,
    email,
    memberName,
    memberEmail,
    memberPw,
    check1,
    check2,
    checkIndex,
    inputIndex,
  ]);

  return (
    <div className={`${modalContainerStyle}`}>
      <div
        className="w-screen h-screen fixed z-10"
        onClick={() => handelMemberAddEvent(setMemberAddMadal)}
      >
        <Overlay />
      </div>
      <div
        className={`${signupFormStyle} border-2 border-soild border-white bg-black p-2`}
      >
        <Fulllogo width="w-[300px]" height="h-[150px]" />
        <MainTitle text={profileMemberAddModalData.title} />
        {/* 입력창  */}
        {profileMemberAddModalData.ples.map((ple, i) => (
          <div key={ple.id}>
            <div className={`${memberAddErrorTextStyle}`}>
              {memberAddError?.[0].inputError?.[i] ||
                memberAddError?.[1].inputErrorValidity?.[i]}
            </div>
            <Input
              ple={ple.ple}
              isType={ple.type}
              isIcon={false}
              isError={
                // 에러 값이 빈 문자열이 아니면 true를 설정합니다.
                memberAddError?.[0].inputError?.[i] !== "" ||
                memberAddError?.[1].inputErrorValidity?.[i] !== ""
              }
              name=""
              setEmail={setEmail}
              setInputIndex={setInputIndex}
              i={i}
              localEmail=""
            />
          </div>
        ))}

        {/* 체크박스 */}
        {profileMemberAddModalData.check_label.map((check, i) => (
          <div key={check.id}>
            <div className={`${memberAddErrorTextStyle}`}>
              {i === 0 && memberAddError?.[2].checkError}
            </div>
            <CheckBox
              isCheck={i === 0 ? check1 : check2}
              label={check.label}
              onChange={() => {
                setIsCheck(!isCheck);
                setCheckIndex(i);
              }}
            />
          </div>
        ))}
        {/* 가입하기 버튼 */}
        <button
          className={`${formBtnStyle} bg-main_Red disabled:opacity-40`}
          onClick={() =>
            MemberAddEvent(
              memberName,
              memberEmail,
              memberPw,
              check1,
              loginMember,
              emailData?.data,
              setIsRedundancyEmail,
              setAddMemberModalOpen
            )
          }
          disabled={!isErrors.every((error) => error)}
        >
          {profileMemberAddModalData.btn_text}
        </button>
      </div>
      {/* 중복 이메일 모달 */}
      {isRedundancyEmail && (
        <RedundancyEmailModal setIsRedundancyEmail={setIsRedundancyEmail} />
      )}
      {/* 멤버 추가 완료 모달 */}
      {addMemberModalOpen && (
        <MemberAddFinish setAddMemberModalOpen={setAddMemberModalOpen} />
      )}
    </div>
  );
};

export default MemberAdd;
