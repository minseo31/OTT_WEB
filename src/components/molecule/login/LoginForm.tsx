import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginData } from "../../../data/loginDatas";
import { handleSignLevel } from "../../../event/login/signLevelEvent";
import {
  loginFormStyle,
  signupTextBoxStyle,
} from "../../../style/molecule/login/container";
import { SignLevelState } from "../../../type/state";
import FormBtn from "../../atom/button/FormBtn";
import CheckBox from "../../atom/input/CheckBox";
import Input from "../../atom/input/Input";
import Fulllogo from "../../atom/logo/Fulllogo";
import MainTitle from "../../atom/text/MainTitle";
import PointText from "../../atom/text/PointText";
import SmallText from "../../atom/text/SmallText";
import SmallTextRed from "../../atom/text/SmallTextRed";
import SubText from "../../atom/text/SubText";
import { onChange } from "../../../util/validation/loginValidation";
import {
  validateEmail,
  validatePassword,
} from "../../../util/validation/loginValidation";
import { loginService } from "../../../service/post/loginService";
import { LoginDataType } from "../../../type/service/post/login";

// 로그인 폼
const LoginForm = ({
  setSignLevel,
  setIsLogin,
  setUserEmail,
  setUserPW,
  userEmail,
  loginMember,
}: SignLevelState) => {
  //이메일 상태 및 유효성 검사
  const [email, setEmail] = useState<string>("");
  const [emailValid, setEmailValid] = useState<boolean>(true);

  // 사용자의 입력 이메일
  const [loginEmail, setloginEmail] = useState<string>("");

  // 사용자의 입력 비밀번호
  const [pw, setPw] = useState<string>("");
  const [pwValid, setPwValid] = useState<boolean>(true);

  // onChange 함수 호출
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
      setEmailValid(validateEmail(value));
      setloginEmail(value);
      localStorage.setItem("userEmail", value); // 이메일을 로컬 스토리지에 저장
    } else if (name === "pw") {
      setPw(value);
      setPwValid(validatePassword(value));
    }
  };

  // 체크박스 상태
  const [isCheck, setIsCheck] = useState<boolean>(() => {
    const savedCheck = localStorage.getItem("isCheck");
    return savedCheck === "true";
  });

  // 네비게이션
  const navigation = useNavigate();

  // 로그인 에러 상태
  const [loginError, setLoginError] = useState<string>("");

  const handleLogin = async () => {
    // 로그인 요청 본문 데이터
    const loginData: LoginDataType = { email: loginEmail, password: pw };

    // 로그인 서버 요청
    const loginResponse = await loginService(loginData);

    if (loginResponse.message === "로그인 성공") {
      // 로그인 성공 처리
      setLoginError("");
      setIsLogin(true); // 로그인 상태로 변경
      setUserEmail(loginEmail);
      localStorage.setItem("loginEmail", loginEmail);
      localStorage.setItem("userEmail", loginEmail);

      if (isCheck) {
        localStorage.setItem("userEmail", loginEmail);
        localStorage.setItem("isCheck", "true");
      } else {
        localStorage.setItem("isCheck", "false");
      }
      setUserPW(pw);
      navigation("/");
    } else {
      // 로그인 실패 처리
      setLoginError("이메일 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  // 로그인 한 유저의 이메일
  const [localEmail, setLocalEmail] = useState<string | null>(
    localStorage?.getItem("userEmail")
  );

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const isCheck = localStorage.getItem("isCheck");
    if (email && isCheck) {
      setloginEmail(email);
    }
  }, []);

  return (
    <form className={`${loginFormStyle}`} onSubmit={(e) => e.preventDefault()}>
      <Fulllogo width="w-[300px]" height="h-[150px]" />
      <MainTitle text={loginData.title} />
      {/* 이메일 입력창 */}
      <div>
        {emailValid ? null : (
          <SmallTextRed
            text="이메일 형식이 올바르지 않습니다."
            align="text-center"
          />
        )}
        <Input
          ple={loginData.ples[0].ple}
          isType="text"
          isIcon={false}
          setEmail={setEmail}
          email={email}
          isError={!emailValid}
          name="email"
          onChange={handleInputChange}
          localEmail={localEmail ? localEmail : ""}
          isCheck={isCheck}
        />
      </div>
      {/* 패스워드 입력창 */}
      <div>
        {pwValid ? null : (
          <SmallTextRed
            text="비밀번호 형식이 올바르지 않습니다."
            align="text-center"
          />
        )}
        <Input
          ple={loginData.ples[1].ple}
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

      {/* 체크박스 */}
      <CheckBox
        isCheck={isCheck}
        label={loginData.check_label}
        onChange={() => setIsCheck(!isCheck)}
      />
      {/* 로그인 버튼 */}
      <FormBtn
        text={loginData.btn_text}
        bgColor="bg-main_Red"
        onClick={handleLogin}
      />
      {loginError && <SmallTextRed text={loginError} align="text-center" />}

      {/* 가입하기  */}
      <div
        className={`${signupTextBoxStyle}`}
        onClick={() => handleSignLevel(setSignLevel, 1)}
      >
        <SubText text={loginData.signup_text} align="text-start" />
        <SubText text="지금 가입하세요." align="text-start" />
      </div>
      {/* 로봇아 아닙니다 정책 */}
      <div>
        <SmallText text={loginData.lobot_text} />
        <PointText
          size="text-sm"
          text="자세히 알아보기"
          url="https://developers.google.com/recaptcha?hl=ko"
        />
      </div>
    </form>
  );
};

export default LoginForm;
