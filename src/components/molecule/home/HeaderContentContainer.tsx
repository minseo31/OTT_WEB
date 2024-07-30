import { Link } from "react-router-dom";
import { headerContentContainerStyle } from "../../../style/molecule/home/container";
import SmallBtn from "../../atom/button/SmallBtn";
import Shortlogo from "../../atom/logo/Shortlogo";
import BtnBox from "../BtnBox";
import { HomePagePropsType } from "../../../type/props/home";

// 헤더 콘텐츠 컨테이너
const HeaderContentContainer = ({ setSignMove }: HomePagePropsType) => {
  return (
    <div className={`${headerContentContainerStyle}`}>
      <Shortlogo />
      <BtnBox>
        {/* 로그인 페이지로 이동 */}
        <Link
          to="/login"
          onClick={() => {
            setSignMove(true);
            window.scrollTo(0, 0);
          }}
        >
          <SmallBtn
            text="가입하기"
            bgColor="bg-black1_07"
            border="border-soild border-white border-2"
          />
        </Link>
        {/* 로그인 페이지로 이동 */}
        <Link to="/login">
          <SmallBtn text="로그인" bgColor="bg-main_Red" />
        </Link>
      </BtnBox>
    </div>
  );
};

export default HeaderContentContainer;
