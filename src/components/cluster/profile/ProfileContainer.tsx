import { profileSection1Container } from "../../../style/cluster/profile/section";
import {
  profileBoxStyle,
  profileNameBoxSTyle,
  profileNameContainerStyle,
  profilePayMentBoxStyle,
  profilePayMentTextBoxStyle,
  profilePayMentTextStyle,
} from "../../../style/molecule/profile/box";
import { ProfileContainerPropsType } from "../../../type/props/propfile";
import MainTitle from "../../atom/text/MainTitle";
import SmallText from "../../atom/text/SmallText";
import SubText from "../../atom/text/SubText";
import Section3MembershipLabel from "../../molecule/home/section3/Section3MembershipLabel";
import SmallTextRed from "../../atom/text/SmallTextRed";
import { logoutModalOpenEvnet } from "../../../event/profile/logoutEvent";
import { useState } from "react";
import LogoutModal from "../../modal/LogoutModal";

// 프로필 컨테이너
const ProfileContainer = ({
  loginMember,
  uniqueData,
  setIsLogin,
}: ProfileContainerPropsType) => {
  // 로그아웃 모달 오픈 상태
  const [logoutModalOpen, setLogoutModalOpen] = useState<boolean>(false);

  return (
    <section className={`${profileSection1Container}`}>
      {/* 왼쪽 박스 */}
      <div className={`${profileBoxStyle}`}>
        <Section3MembershipLabel
          title1={loginMember?.[0].membership_level?.split(" ")[0]}
          title2={loginMember?.[0].membership_level?.split(" ")[1]}
          width="350px"
          height="100px"
        />
        <div className={`${profileNameContainerStyle}`}>
          <div className={`${profileNameBoxSTyle}`}>
            <SubText text="환영합니다" align="text-start" />
            <MainTitle text={`${loginMember?.[0].member_name}님`} />
            <span className="cursor-pointer" onClick={() => logoutModalOpenEvnet(setLogoutModalOpen)}>
              <SmallTextRed text="로그아웃하기" />
            </span>
          </div>
          <SmallText
            text={`현재 ${
              loginMember?.[0].membership_level?.split(" ")[0]
            } 멤버쉽을 이용중입니다.`}
            align="text-start"
          />
        </div>
      </div>
      {/* 오른쪽 박스 */}
      <div className={`${profileBoxStyle}`}>
        <div className={`${profilePayMentBoxStyle}`}>
          <div></div>
          <div className={`${profilePayMentTextBoxStyle}`}>
            <div className={`${profilePayMentTextStyle}`}>
              <SmallText
                text={`결제 등록 카드 : ${
                  loginMember?.[0].card_number ?? "정보를 불러오지 못했습니다"
                }`}
              />
              <SmallText
                text={`결제일 : ${
                  loginMember?.[0].payment_date ?? "정보를 불러오지 못했습니다"
                }`}
              />
            </div>
            <SmallText
              text={`멤버 : ${uniqueData?.map((member) =>
                member.member_name
                  ? member.member_name + " "
                  : "멤버가 없습니다"
              )}`}
            />
          </div>
        </div>
      </div>
      {/* 로그아웃 모달 */}
      {logoutModalOpen && (
        <LogoutModal
          setIsLogin={setIsLogin}
          setLogoutModalOpen={setLogoutModalOpen}
        />
      )}
    </section>
  );
};

export default ProfileContainer;
