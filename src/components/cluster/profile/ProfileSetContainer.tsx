import { useEffect, useState } from "react";
import { profileSection2Container } from "../../../style/cluster/profile/section";
import {
  profileMemberContainer,
  profileMemberContentContainerStyle,
} from "../../../style/molecule/profile/box";
import BigBtn from "../../atom/button/BigBtn";
import SubTitle from "../../atom/text/SubTitle";
import MemberDelete from "../../modal/MemberDelete";
import ProfileMemberBox from "./ProfileMemberBox";
import { handelMemberAddEvent } from "../../../event/profile/memberModalEvent";
import MemberAdd from "../../modal/MemberAdd";
import { ProfileSetPropsType } from "../../../type/props/propfile";
import { MemberDataType } from "../../../type/service/get/member";
import MemberLoginModal from "../../modal/MemberLoginModal";
import { userConvert } from "../../../event/profile/userConvert";
import MemberConvertModal from "../../modal/MemberConvertModal";
import { removeDuplicateEmails } from "../../../util/validation/profile/uniqueMemberFilter";
import SubText from "../../atom/text/SubText";
import MemberLimitModal from "../../modal/MemberLimitModal";
import MemberAccessModal from "../../modal/MemberAccessModal";

// 프로필 멤버 컨테이너
const ProfileSetContainer = ({
  members,
  userEmail,
  loginMember,
  emailData,
  setUserEmail,
  setUserPW,
  setLoginMember,
  setIsMember,
  isMember,
  setMembers,
}: ProfileSetPropsType) => {
  // 멤버 로그인 모달 오픈 상태
  const [memberLoginOpen, setMemberLoginOpen] = useState<boolean>(false);
  // 멤버 삭제 모달 오픈 상태
  const [memberDelModal, setMemberDelModal] = useState<boolean>(false);
  // 멤버 추가 모달 오픈 상태
  const [memberAddMadal, setMemberAddMadal] = useState<boolean>(false);
  // 로그인 유저를 제외한 멤버 데이터
  const [memberData, setMemberData] = useState<MemberDataType[]>([]);
  // 멤버 데이터의 존재 유무
  const [isMemberData, setIsMemberData] = useState<boolean>(false);
  // 삭제할 멤버
  const [deleteMember, setDeleteMember] = useState<MemberDataType>();
  // 로그인할 멤버의 이메일
  const [loginMemberEmail, setLoginMemberEmail] = useState<string>("");
  // 로그인할 멤버의 이름
  const [loginMemberName, setLoginMemberName] = useState<string>("");
  // 메인 계정전환 모달
  const [memberConvertModalOpen, setMemberConvertModalOpen] =
    useState<boolean>(false);
  // 멤버 추가 제한 모달
  const [memberLimitModal, setMemberLimitModal] = useState<boolean>(false);
  // 멤버 삭제 권한 모달
  const [memberAccessModal, setMemberAccessModal] = useState<boolean>(false);

  useEffect(() => {
    isMember && setMemberAccessModal(false);
  }, [isMember]);

  // 멤버 수
  const [memberCount, setMemberCount] = useState<number>(0);

  useEffect(() => {
    if (members?.length) {
      members[0].member_email !== null
        ? setIsMemberData(true)
        : setIsMemberData(false);
    }
  }, [members]);

  // 데이터 처리
  const uniqueData = removeDuplicateEmails(members);

  // 멤버 추가 제한
  useEffect(() => {
    if (loginMember) {
      loginMember[0].membership_level === "프리미엄(Premium) 4K+HDR"
        ? setMemberCount(4)
        : setMemberCount(2);
    }
  }, [loginMember]);

  return (
    <section className="w-full h-[250px] bg-black1 flex flex-col justify-between items-center px-12">
      <div className="w-full h-fit flex justify-between items-center py-2 border-b-2 border-[#E50914]">
        {/* 타이틀 */}
        <SubTitle text="멤버" align="text-start" />
        {/* 버튼 */}
        <div className="flex gap-4">
          <div onClick={() => setMemberConvertModalOpen(true)}>
            <BigBtn
              text="메인 계정으로 전환"
              bgColor="bg-white"
              textColor="#E50914"
            />
          </div>
          <div
            onClick={() =>
              handelMemberAddEvent(
                setMemberAddMadal,
                memberCount,
                setMemberLimitModal,
                setMemberAccessModal
              )
            }
          >
            <BigBtn text="멤버 추가" bgColor="bg-main_Red" />
          </div>
        </div>
      </div>
      <div className={`${profileSection2Container}`}>
        <div className={`${profileMemberContentContainerStyle}`}>
          {/* 멤버가 없을 때  */}
          {!isMemberData && (
            <div className="w-full h-full flex justify-center items-center">
              <SubText align="text-center" text="멤버가 없습니다" />
            </div>
          )}
          <div className={`${profileMemberContainer}`}>
            {/* 멤버 리스트 */}
            {isMemberData &&
              uniqueData?.map((member) => (
                <div key={member.member_email}>
                  <ProfileMemberBox
                    member={member}
                    setMemberDelModal={setMemberDelModal}
                    setDeleteMember={setDeleteMember}
                    setMemberLoginOpen={setMemberLoginOpen}
                    setLoginMemberEmail={setLoginMemberEmail}
                    setLoginMemberName={setLoginMemberName}
                    setMemberAccessModal={setMemberAccessModal}
                    isMember={isMember}
                  />
                </div>
              ))}
          </div>
        </div>
        {/* 멤버 추가 모달 */}
        {memberAddMadal && (
          <MemberAdd
            setMemberAddMadal={setMemberAddMadal}
            loginMember={loginMember}
            emailData={emailData}
          />
        )}
        {/* 멤버 삭제 모달 */}
        {memberDelModal && (
          <MemberDelete
            deleteMember={deleteMember}
            setMemberDelModal={setMemberDelModal}
          />
        )}
        {/* 멤버 로그인 모달 */}
        {memberLoginOpen && (
          <MemberLoginModal
            setUserEmail={setUserEmail}
            setUserPW={setUserPW}
            setMemberLoginOpen={setMemberLoginOpen}
            members={members}
            setLoginMember={setLoginMember}
            setIsMeber={setIsMember}
            loginMemberEmail={loginMemberEmail}
            loginMemberName={loginMemberName}
            loginMember={loginMember}
          />
        )}
        {/* 메인 계정으로 전환 모달 */}
        {memberConvertModalOpen && (
          <MemberConvertModal
            setLoginMember={setLoginMember}
            setMemberConvertModalOpen={setMemberConvertModalOpen}
            isMember={isMember}
            userEmail={userEmail}
            setIsMeber={setIsMember}
          />
        )}
        {/* 멤버 추가 제한 모달 */}
        {memberLimitModal && (
          <MemberLimitModal setMemberLimitModal={setMemberLimitModal} />
        )}
        {/* 멤버 삭제 제한 모달 */}
        {memberAccessModal && (
          <MemberAccessModal
            setMemberAccessModal={setMemberAccessModal}
            setLoginMember={setLoginMember}
            setMemberConvertModalOpen={setMemberConvertModalOpen}
            userEmail={userEmail}
            setIsMeber={setIsMember}
          />
        )}
      </div>
    </section>
  );
};

export default ProfileSetContainer;

