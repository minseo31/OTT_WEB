import MainBgImg from "../components/atom/bg/MainBgImg";
import Footer from "../components/cluster/Footer";
import LoginForm from "../components/molecule/login/LoginForm";
import { LoginPageStyle } from "../style/cluster/login/loginPage";
import {
  backIconBox,
  homeBtnBox,
  loginContainerStyle,
  loginFormBoxStyle,
} from "../style/molecule/login/container";
import SignUpForm1 from "../components/molecule/login/SignUpForm1";
import { footerPosition } from "../style/cluster/Footer";
import SignUpForm2 from "../components/molecule/login/SignUpForm2";
import SignUpForm3 from "../components/molecule/login/SignUpForm3";
import SignCompleted from "../components/molecule/login/SignCompleted";
import { useEffect, useState } from "react";
import {
  handleSignLevel,
  signLevelActive,
} from "../event/login/signLevelEvent";
import Homeicon from "../components/icon/Homeicon";
import { Link } from "react-router-dom";
import { LoginPagePropsType } from "../type/props/login";
import { UserAddDataType } from "../type/service/post/signup";
import BackArrowicon from "../components/icon/BackArrowicon";

// 로그인 페이지
const LoginPage = ({
  setIsLogin,
  setUserEmail,
  setUserPW,
  userEmail,
  loginMember,
  signMove,
  setSignMove,
}: LoginPagePropsType) => {
  // 가입단계 상태
  const [signLevel, setSignLevel] = useState<0 | 1 | 2 | 3 | 4>(0);

  // 회원가입 서버 요청 초기 데이터
  const [signUpData, setSignUpData] = useState<UserAddDataType>({
    name: ``,
    email: ``,
    password: ``,
    cardNumber: ``,
    expiryDate: ``,
    cardName: ``,
    amount: 17000,
  });

  // 가입자가 선택한 멤버쉽 이름
  const [membershipName, setMembershipName] = useState<
    "p_membership" | "s_membership" | "a_membership"
  >("s_membership");

  // 홈페이지에서 가입하기로 바로 이동
  useEffect(() => {
    if (signMove) {
      handleSignLevel(setSignLevel, 1);
    }
    // 로그인은 로그인으로 이동하도록 이동값 초기화
    setTimeout(() => {
      setSignMove(false);
    }, 1000);
  }, [signMove]);

  return (
    <div className={`${LoginPageStyle}`}>
      <MainBgImg />
      <Link to="/" className={`${homeBtnBox}`}>
        <Homeicon />
      </Link>
      <div
        className={`${backIconBox}`}
        onClick={() => {
          if (signLevel >= 1 && signLevel <= 4) {
            // 상태 업데이트와 함께 이벤트 핸들러 호출
            setSignLevel((prevSignLevel) => {
              const newSignLevel = (prevSignLevel - 1) as 0 | 1 | 2 | 3 | 4; // 타입 단언 사용
              handleSignLevel(setSignLevel, newSignLevel);
              return newSignLevel;
            });
          }
        }}
      >
        <BackArrowicon />
      </div>
      <div
        className={`w-[500vw] h-screen flex relative top-0 bottom-0 transition-all duration-300 ${signLevelActive(
          signLevel
        )}`}
      >
        {/* 로그인  */}
        <div className={`${loginContainerStyle}`}>
          <div className={`${loginFormBoxStyle}`}>
            <LoginForm
              setSignLevel={setSignLevel}
              setIsLogin={setIsLogin}
              setUserEmail={setUserEmail}
              setUserPW={setUserPW}
              userEmail={userEmail}
              loginMember={loginMember}
              setSignUpData={setSignUpData}
              setMembershipName={setMembershipName}
            />
          </div>
        </div>
        {/* 가입하기 1단계 */}
        <div className={`${loginContainerStyle}`}>
          <div className={`${loginFormBoxStyle}`}>
            <SignUpForm1
              setSignLevel={setSignLevel}
              setIsLogin={setIsLogin}
              setUserEmail={setUserEmail}
              setUserPW={setUserPW}
              loginMember={loginMember}
              setSignUpData={setSignUpData}
              setMembershipName={setMembershipName}
            />
          </div>
        </div>
        {/* 가입하기 2단계 */}
        <div className={`${loginContainerStyle}`}>
          <div className={`${loginFormBoxStyle}`}>
            <SignUpForm2
              setSignLevel={setSignLevel}
              setIsLogin={setIsLogin}
              setUserEmail={setUserEmail}
              setUserPW={setUserPW}
              loginMember={loginMember}
              setSignUpData={setSignUpData}
              setMembershipName={setMembershipName}
            />
          </div>
        </div>
        {/* 가입하기 3단계 */}
        <div className={`${loginContainerStyle}`}>
          <div className={`${loginFormBoxStyle}`}>
            <SignUpForm3
              setSignLevel={setSignLevel}
              setIsLogin={setIsLogin}
              setUserEmail={setUserEmail}
              setUserPW={setUserPW}
              loginMember={loginMember}
              setSignUpData={setSignUpData}
              setMembershipName={setMembershipName}
              signUpData={signUpData}
            />
          </div>
        </div>
        {/* 가입완료 */}
        <div className={`${loginContainerStyle}`}>
          <div className={`${loginFormBoxStyle}`}>
            <SignCompleted
              setSignLevel={setSignLevel}
              setIsLogin={setIsLogin}
              setUserEmail={setUserEmail}
              setUserPW={setUserPW}
              loginMember={loginMember}
              setSignUpData={setSignUpData}
              signUpData={signUpData}
              setMembershipName={setMembershipName}
              membershipName={membershipName}
            />
          </div>
        </div>
      </div>
      <div className={`${footerPosition}`}>
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
