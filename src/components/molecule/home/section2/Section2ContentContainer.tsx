import { Section2MemberPerkTitlebox } from "../../../../style/molecule/home/box";
import { Section2ContentContainerStyle } from "../../../../style/molecule/home/container";
import Fulllogo from "../../../atom/logo/Fulllogo";
import MainTitle from "../../../atom/text/MainTitle";
import Section2MemberAdBox from "./Section2MemberAdBox";
import Section2PerkContainer from "./Section2PerkContainer";

// 홈 페이지 section2 콘텐츠 컨테이너
const Section2ContentContainer = () => {
  return (
    <div className={`${Section2ContentContainerStyle}`}>
      <Section2MemberAdBox />
      <div className={`${Section2MemberPerkTitlebox}`}>
        <Fulllogo width="w-[150px]" height="h-[75px]" />
        <MainTitle text="멤버쉽은 이러한 혜택을 받을 수 있습니다 !" />
      </div>
      <Section2PerkContainer />
    </div>
  );
};

export default Section2ContentContainer;
