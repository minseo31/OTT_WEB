import { useState } from "react";
import { MemberLoginModalPropsType } from "../../type/props/propfile";
import { modalContainerStyle } from "../../style/modal/modal";
import Overlay from "../atom/bg/Overlay";
import MemberLoginClaerModal from "./MemberLoginClearModal";
import { memberDeleteBox } from "../../style/modal/memberDelete";
import SubTitle from "../atom/text/SubTitle";
import BtnBox from "../molecule/BtnBox";
import SmallBtn from "../atom/button/SmallBtn";

// 멤버 로그인 모달
const MemberLoginModal = ({
  setUserEmail,
  setUserPW,
  setMemberLoginOpen,
  members,
  setLoginMember,
  setIsMeber,
  loginMemberEmail,
  loginMemberName,
  loginMember,
}: MemberLoginModalPropsType) => {
  // 사용자의 입력 비밀번호
  const [pw, setPw] = useState<string>("");

  // 멤버 로그인 완료 모달 오픈 상태
  const [memberLoginModalOpen, setMemberLoginModalOpen] =
    useState<boolean>(false);

  //   로그인 버튼 클릭 이벤트
  const handleLogin = async () => {
    setMemberLoginModalOpen(true);
  };

  return (
    <div className={`${modalContainerStyle}`}>
      <Overlay />
      <div className={`${memberDeleteBox}`}>
        <SubTitle text={`멤버 '${loginMemberName}'로 전환하시겠습니까?`} />
        <BtnBox>
          <div onClick={handleLogin}>
            <SmallBtn text="전환하기" bgColor="bg-main_Red" />
          </div>
          <div onClick={() => {}}>
            <SmallBtn text="뒤로가기" bgColor="bg-black1_07" />
          </div>
        </BtnBox>
      </div>
      {/* 멤버 로그인 성공 모달 */}
      {memberLoginModalOpen && (
        <MemberLoginClaerModal
          setMemberLoginModalOpen={setMemberLoginModalOpen}
          setIsMeber={setIsMeber}
          setMemberLoginOpen={setMemberLoginOpen}
          setUserEmail={setUserEmail}
          loginMemberEmail={loginMemberEmail}
          setUserPW={setUserPW}
          pw={pw}
          members={members}
          setLoginMember={setLoginMember}
          loginMember={loginMember}
          loginMemberName={loginMemberName}
        />
      )}
    </div>
  );
};

export default MemberLoginModal;
