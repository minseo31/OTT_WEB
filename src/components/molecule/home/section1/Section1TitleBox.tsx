import { Link } from "react-router-dom";
import { Section1TitleContainerStyle } from "../../../../style/molecule/home/container";
import BigBtn from "../../../atom/button/BigBtn";
import Fulllogo from "../../../atom/logo/Fulllogo";
import MainText from "../../../atom/text/MainText";
import MainTitle from "../../../atom/text/MainTitle";
import BtnBox from "../../BtnBox";
import TextBox from "../../TextBox";
import membershipMove from "../../../../event/home/section1Event";
import { HomePagePropsType } from "../../../../type/props/home";

// 홈 페이지 section1의 타이틀 박스
const SectionTitleContainer = ({ setSignMove }: HomePagePropsType) => {
  return (
    <div className={`${Section1TitleContainerStyle}`}>
      <Fulllogo width="w-[300px]" height="h-[150px]" />
      <MainTitle text="영화 , 시리즈 등을 제한없이 즐겨보세요 !" />
      <TextBox>
        <MainText
          text="언제 어디서나 자유롭게 시청하세요"
          align="text-center"
        />
        <MainText
          text="시청할 준비가 되었나요? 멤버쉽을 등록하거나 기존 회원이라면 로그인을 하세요"
          align="text-center"
        />
      </TextBox>
      <BtnBox>
        {/* 클릭 시 스크롤 이동 핸들러 정의해야함 */}
        <div onClick={membershipMove}>
          <BigBtn
            text="멤버쉽 보기"
            bgColor="bg-black1_07"
            border="border-soild border-white border-2"
          />
        </div>
        {/* 로그인 페이지로 이동 */}
        <Link
          to="/login"
          onClick={() => {
            setSignMove(true);
            window.scrollTo(0, 0);
          }}
        >
          <BigBtn text="등록하기" bgColor="bg-main_Red" />
        </Link>
      </BtnBox>
    </div>
  );
};

export default SectionTitleContainer;
