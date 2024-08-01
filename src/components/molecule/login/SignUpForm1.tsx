import { useEffect, useState } from "react";
import { signupData1 } from "../../../data/loginDatas";
import { handleSignLevel } from "../../../event/login/signLevelEvent";
import { signupFormStyle } from "../../../style/molecule/login/container";
import { SignLevelState } from "../../../type/state";
import FormBtn from "../../atom/button/FormBtn";
import CheckBox from "../../atom/input/CheckBox";
import Input from "../../atom/input/Input";
import Fulllogo from "../../atom/logo/Fulllogo";
import MainTitle from "../../atom/text/MainTitle";
import SmallText from "../../atom/text/SmallText";
import {
  validateEmail,
  validatePassword,
} from "../../../util/validation/loginValidation";
import SmallTextRed from "../../atom/text/SmallTextRed";
import FooterModalContainer from "../footer/footerModalContainer/FooterModalContainer";

// 가입하기 1 단계
const SignUpForm1 = ({ setSignLevel, setSignUpData }: SignLevelState) => {
  //이메일, 패스워드 상태 및 유효성 검사
  const [email, setEmail] = useState<string>("");
  const [signEmail, setSignEmail] = useState<string>("");
  const [emailValid, setEmailValid] = useState<boolean>(true);

  const [pw, setPw] = useState<string>("");
  const [pwValid, setPwValid] = useState<boolean>(true);

  const [pwCheck, setPwCheck] = useState<string>("");
  const [pwValidCheck, setPwValidCheck] = useState<boolean>(true);

  const [pwMatch, setPwMatch] = useState<boolean>(true);

  // 개인정보 처리 방침 모달
  const [policyModal, setPolicyModal] = useState<boolean>(false);

  // onChange 함수 호출
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
      setSignEmail(value);
      setEmailValid(validateEmail(value));
    } else if (name === "pw") {
      setPw(value);
      setPwValid(validatePassword(value));
      setPwMatch(value === pwCheck); // 비밀번호 일치 확인
    } else if (name === "pwCheck") {
      setPwCheck(value);
      setPwValidCheck(validatePassword(value));
      setPwMatch(value === pw); // 비밀번호 일치 확인
    }
  };

  // 가입 값 유효성 검사 상태
  const [joinError, setJoinError] = useState<string>("");

  // 가입 값 유효성 검사
  const handleJoin = () => {
    // 기본적인 오류 메시지 초기화
    setJoinError("");

    // 조건 검사
    if (!firstIsCheck) {
      setJoinError("이용 약관에 동의해야 합니다.");
      return;
    }

    if (!emailValid) {
      setJoinError("이메일 형식이 올바르지 않습니다.");
      return;
    }

    if (!pwValid || !pwValidCheck) {
      setJoinError("비밀번호 형식이 올바르지 않습니다.");
      return;
    }

    if (!pwMatch) {
      setJoinError("비밀번호가 일치하지 않습니다.");
      return;
    }

    handleSignLevel(setSignLevel, 2);
  };

  const [firstIsCheck, setFirstIsCheck] = useState(false);
  const [secIsCheck, setSecIsCheck] = useState(false);

  useEffect(() => {
    // 회원가입 정보 저장
    setSignUpData((prev) => {
      return {
        name: prev.name,
        email: signEmail,
        password: pw,
        card_name: prev.card_name,
        card_number: prev.card_number,
        amount: prev.amount,
        expiry_date: prev.expiry_date,
      };
    });
  }, [email, pw]);

  return (
    <div className={`${signupFormStyle}`}>
      <Fulllogo width="w-[300px]" height="h-[150px]" />
      <SmallText text={signupData1.level} />
      <MainTitle text={signupData1.title} />

      {/* 이메일 입력창 */}
      <div>
        {emailValid ? null : (
          <SmallTextRed
            text="이메일 형식이 올바르지 않습니다."
            align="text-center"
          />
        )}
        <Input
          ple={signupData1.ples[0].ple}
          isType="text"
          isIcon={false}
          setEmail={setEmail}
          email={email}
          isError={!emailValid}
          name="email"
          onChange={handleInputChange}
          localEmail=""
        />
      </div>
      {/* 패스워드 입력창 */}
      <div>
        {pwValid ? null : (
          <SmallTextRed
            text="비밀번호는 영문,숫자,특수문자을 혼합하여 입력해야합니다"
            align="text-center"
          />
        )}
        <Input
          ple={signupData1.ples[1].ple}
          isType="password"
          isIcon={false}
          setEmail={setEmail}
          email={email}
          isError={!pwValid}
          name="pw"
          onChange={handleInputChange}
          localEmail=""
        />
      </div>
      {/* 패스워드 확인 입력창 */}
      <div>
        {pwValidCheck && pwMatch ? null : (
          <SmallTextRed
            text={pwValidCheck ? "" : "비밀번호가 일치하지 않습니다."}
            align="text-center"
          />
        )}
        <Input
          ple={signupData1.ples[2].ple}
          isType="password"
          isIcon={false}
          setEmail={setEmail}
          email={email}
          isError={!pwValidCheck}
          name="pwCheck"
          onChange={handleInputChange}
          localEmail=""
        />
      </div>
      {joinError && <SmallTextRed text={joinError} align="text-center" />}

      {/* 체크박스 */}
      <CheckBox
        isCheck={firstIsCheck}
        label={signupData1.check_label[0].label}
        onChange={() => setFirstIsCheck(!firstIsCheck)}
        onClick={() => setPolicyModal(true)}
      />
      <CheckBox
        isCheck={secIsCheck}
        label={signupData1.check_label[1].label}
        onChange={() => setSecIsCheck(!secIsCheck)}
      />

      {/* 가입하기 버튼 */}
      <div onClick={handleJoin /*() => handleSignLevel(setSignLevel, 2)*/}>
        <FormBtn text={signupData1.btn_text} bgColor="bg-main_Red" />
      </div>
      {/* 개인정보 처리방침 모달 */}
      {policyModal && (
        <FooterModalContainer
          setPolicyModal={setPolicyModal}
          isModal="개인정보 처리방침"
        />
      )}
    </div>
  );
};

export default SignUpForm1;
