import { useEffect, useState } from "react";
import SideBar from "../components/cluster/SideBar";
import ProfileContainer from "../components/cluster/profile/ProfileContainer";
import ProfileSetContainer from "../components/cluster/profile/ProfileSetContainer";
import ProfileWishContainer from "../components/cluster/profile/ProfileWishContainer";
import {
  profileContainer,
  profileContnetContainer,
} from "../style/cluster/profile/section";
import { SideBarPropsType } from "../type/props/propfile";
import { MemberDataType, MemberResponseType } from "../type/service/get/member";
import {
  loginMemberFilter,
  loginUserData,
} from "../util/validation/profile/loginMemberFilter";

import { fetchMember } from "../service/get/memberAllService";
import { removeDuplicateEmails } from "../util/validation/profile/uniqueMemberFilter";
import { emailService } from "../service/get/emailAllService";
import { EmailResponseType } from "../type/service/get/email";

// 프로필 페이지
const ProfilePage = ({
  isPage,
  setIsPage,
  userEmail,
  setIsLogin,
  setUserEmail,
  setUserPW,
  loginMember,
  setLoginMember,
  isLogin,
  setIsMeber,
  isMember,
  setWishState,
  wishState,
  wishMSGModal,
  setWishMSGModal,
  isWish,
  setIsWish,
  setViewingHistory,
  viewingHistory,
  setMemberData,
  memberData,
}: SideBarPropsType) => {
  // // 이메일 데이터 요청
  // const { data: emailData, error: emailError } = useSWR<EmailResponseType>(
  //   isLogin ? "https://ott-ss.azurewebsites.net/member/allEmail" : null,
  //   emailService
  // );

  // 이메일 데이터
  const [emailData, setEmailData] = useState<EmailResponseType>({
    data: [],
    message: "",
    status: "",
  });

  useEffect(() => {
    // 멤버 데이터 서버 요청
    const fetchMemberData = async () => {
      try {
        const data = await emailService();
        setEmailData(data);
      } catch (error) {
        console.error("이메일 정보를 불러오기 실패하였습니다 : ", error);
      }
    };

    fetchMemberData();
  }, [isPage, isLogin, userEmail, isMember, wishState]);

  // 로그인 유저의 멤버 데이터
  const [members, setMembers] = useState<MemberDataType[]>();

  // 데이터 처리
  const uniqueData = removeDuplicateEmails(members);

  useEffect(() => {
    // 로그인 유저의 데이터를 가져오기

    if (memberData?.data) {
      const loginData = loginUserData(memberData?.data);
      setLoginMember(loginData);

      // 멤버 데이터 추출
      const members = loginMemberFilter(
        memberData?.data,
        localStorage.getItem("userEmail"),
        true
      );
      setMembers(members);

      // 로그인 유저의 데이터를 로컬에 저장
      localStorage.setItem("LoginData", JSON.stringify(loginData));
      // 멤버 데이터를 로컬에 저장
      localStorage.setItem("MemberData", JSON.stringify(members));
    }
  }, [memberData]);

  useEffect(() => {
    setIsPage("s2");
    const loginState = localStorage.getItem("loginState");
    if (loginState === "true") {
      const email = localStorage.getItem("loginEmail");
      if (email && !isMember) {
        setUserEmail(email);
        userEmail && fetchMember(userEmail);
      }
    }

    // 메인 계정으로 전환하기 위한 메인 계정 데이터 저장
    if (!isMember) {
      localStorage.setItem("MainMemberData", JSON.stringify(loginMember));
    }
  }, [members, loginMember, memberData]);

  // console.log("현재 로그인" + localStorage.getItem("loginEmail"), loginMember);

  return (
    <main className={`${profileContainer}`}>
      <SideBar
        isPage={isPage}
        setIsPage={setIsPage}
        setIsLogin={setIsLogin}
        setUserEmail={setUserEmail}
        setUserPW={setUserPW}
        loginMember={loginMember}
        setLoginMember={setLoginMember}
        isLogin={isLogin}
        setIsMeber={setIsMeber}
        setWishState={setWishState}
        wishState={wishState}
        wishMSGModal={wishMSGModal}
        setWishMSGModal={setWishMSGModal}
        isWish={isWish}
        setIsWish={setIsWish}
        setViewingHistory={setViewingHistory}
        viewingHistory={viewingHistory}
        setMemberData={setMemberData}
      />
      <div className={`${profileContnetContainer}`}>
        {/* 프로필 정보 */}
        <ProfileContainer
          loginMember={loginMember}
          uniqueData={uniqueData}
          setIsLogin={setIsLogin}
        />
        {/* 멤버 */}
        <ProfileSetContainer
          members={members}
          userEmail={userEmail}
          loginMember={loginMember}
          emailData={emailData}
          setUserEmail={setUserEmail}
          setUserPW={setUserPW}
          setLoginMember={setLoginMember}
          setIsMember={setIsMeber}
          isMember={isMember}
          setMembers={setMembers}
        />
        {/* 찜한 콘텐츠 */}
        <ProfileWishContainer
          loginMember={loginMember}
          isMember={isMember}
          setWishState={setWishState}
          wishState={wishState}
          setWishMSGModal={setWishMSGModal}
          wishMSGModal={wishMSGModal}
          isWish={isWish}
          setIsWish={setIsWish}
          setViewingHistory={setViewingHistory}
          title="찜한 콘텐츠"
          setLoginMember={setLoginMember}
          viewingHistory={viewingHistory}
          setMemberData={setMemberData}
          memberData={memberData}
        />
        {/* 시청기록 */}
        <ProfileWishContainer
          loginMember={loginMember}
          isMember={isMember}
          setWishState={setWishState}
          wishState={wishState}
          setWishMSGModal={setWishMSGModal}
          wishMSGModal={wishMSGModal}
          isWish={isWish}
          setIsWish={setIsWish}
          setViewingHistory={setViewingHistory}
          title="시청기록"
          setLoginMember={setLoginMember}
          viewingHistory={viewingHistory}
          setMemberData={setMemberData}
          memberData={memberData}
        />
      </div>
    </main>
  );
};
export default ProfilePage;

