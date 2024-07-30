import { useNavigate } from "react-router-dom";
import { logoutEvnet } from "../../event/profile/logoutEvent";
import { memberDeleteBox } from "../../style/modal/memberDelete";
import { modalContainerStyle } from "../../style/modal/modal";
import { LogoutModalPropsType } from "../../type/props/propfile";
import Overlay from "../atom/bg/Overlay";
import SmallBtn from "../atom/button/SmallBtn";
import SubTitle from "../atom/text/SubTitle";
import BtnBox from "../molecule/BtnBox";

// 로그아웃 모달
const LogoutModal = ({
  setIsLogin,
  setLogoutModalOpen,
}: LogoutModalPropsType) => {
  // 네비게이션
  const navigation = useNavigate();

  return (
    <div className={`${modalContainerStyle}`}>
      <Overlay />
      <div className={`${memberDeleteBox}`}>
        <span className="p-4">
          <SubTitle text="로그아웃하시겠습니까?" />
        </span>
        <BtnBox>
          <div
            className="relative z-[999]"
            onClick={() =>
              logoutEvnet(navigation, setIsLogin, false, setLogoutModalOpen)
            }
          >
            <SmallBtn text="로그아웃" bgColor="bg-main_Red" />
          </div>
          <div
            className="relative z-[999]"
            onClick={() =>
              logoutEvnet(navigation, setIsLogin, true, setLogoutModalOpen)
            }
          >
            <SmallBtn text="뒤로가기" bgColor="bg-black1_07" />
          </div>
        </BtnBox>
      </div>
    </div>
  );
};

export default LogoutModal;
