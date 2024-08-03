import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import ProfilePage from "./page/ProfilePage";
import MainPage from "./page/MainPage";
import ErrorPage from "./page/ErrorPage";
import { MemberDataType, MemberResponseType } from "./type/service/get/member";
import { MainData } from "./type/data/MainData";
import { fetchMember } from "./service/get/memberAllService";

const App = () => {
  // 로그인 상태
  const [isLogin, setIsLogin] = useState<boolean>(false);
  // 현재 페이지 추적
  const [isPage, setIsPage] = useState<"s1" | "s2" | "s3" | "s4">("s1");
  // 로그인 한 유저의 이메일
  const [userEmail, setUserEmail] = useState<string>("");
  // 로그인 한 유저의 비밀번호
  const [userPw, setUserPW] = useState<string>("");
  // 로그인 계정이 유저인지 멤버인지 확인하는 값
  const [isMember, setIsMeber] = useState<boolean>(false);
  // 로그인 유저의 데이터
  const [loginMember, setLoginMember] = useState<MemberDataType[]>();
  // 찜목록 추가 , 삭제 변경
  const [wishState, setWishState] = useState<boolean>(false);
  // 찜목록 메세지 오픈 상태
  const [wishMSGModal, setWishMSGModal] = useState<"opacity-0" | "opacity-100">(
    "opacity-0"
  );
  // 찜한 콘텐츠 확인 여부
  const [isWish, setIsWish] = useState<boolean>(false);
  // 가입하기로 바로 이동 값
  const [signMove, setSignMove] = useState<boolean>(false);

  // 시청 기록 데이터
  const [viewingHistory, setViewingHistory] = useState<MainData[]>([]);

  // 멤버 데이터
  const [memberData, setMemberData] = useState<MemberResponseType | null>(null);

  useEffect(() => {
    // 멤버 데이터 서버 요청
    const fetchMemberData = async (email: string) => {
      try {
        const data = await fetchMember(email);
        setMemberData(data);
      } catch (error) {}
    };

    const email = localStorage.getItem("userEmail");

    if (email) {
      fetchMemberData(email);
    }
  }, [isPage, isLogin, userEmail, isMember, wishState]);

  // 로컬 스토리지애서 로그인 상태를 저장
  useEffect(() => {
    const loginState = localStorage.getItem("loginState");
    if (loginState === "true") {
      setIsLogin(true);
    }

    if (isLogin) {
      localStorage.setItem("loginState", "true");
    } else {
      localStorage.setItem("loginState", "false");
    }
  }, [isLogin]);

  return (
    <main className="bg-black w-screen h-fit overflow-x-hidden">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLogin ? (
                // 메인 페이지
                <MainPage
                  isPage={isPage}
                  setIsPage={setIsPage}
                  setIsLogin={setIsLogin}
                  setUserEmail={setUserEmail}
                  setUserPW={setUserPW}
                  loginMember={loginMember}
                  setLoginMember={setLoginMember}
                  isLogin={isLogin}
                  setIsMeber={setIsMeber}
                  isMember={isMember}
                  setWishState={setWishState}
                  wishState={wishState}
                  wishMSGModal={wishMSGModal}
                  setWishMSGModal={setWishMSGModal}
                  isWish={isWish}
                  setIsWish={setIsWish}
                  setViewingHistory={setViewingHistory}
                  viewingHistory={viewingHistory}
                  setMemberData={setMemberData}
                  memberData={memberData}
                />
              ) : (
                // 홈 페이지
                <HomePage setSignMove={setSignMove} />
              )
            }
          />
          <Route
            path="/login"
            element={
              // 로그인 페이지
              <LoginPage
                setIsLogin={setIsLogin}
                setUserEmail={setUserEmail}
                setUserPW={setUserPW}
                userEmail={userEmail}
                loginMember={loginMember}
                signMove={signMove}
                setSignMove={setSignMove}
              />
            }
          />
          <Route
            path="/profile/:id"
            element={
              // 프로필 페이지
              <ProfilePage
                isPage={isPage}
                setIsPage={setIsPage}
                userEmail={userEmail}
                setIsLogin={setIsLogin}
                setUserEmail={setUserEmail}
                setUserPW={setUserPW}
                loginMember={loginMember}
                setLoginMember={setLoginMember}
                isLogin={isLogin}
                setIsMeber={setIsMeber}
                isMember={isMember}
                setWishState={setWishState}
                wishState={wishState}
                wishMSGModal={wishMSGModal}
                setWishMSGModal={setWishMSGModal}
                isWish={isWish}
                setIsWish={setIsWish}
                setViewingHistory={setViewingHistory}
                viewingHistory={viewingHistory}
                setMemberData={setMemberData}
                memberData={memberData}
              />
            }
          />
          {/* 에러 페이지 */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;

