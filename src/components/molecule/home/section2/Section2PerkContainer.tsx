import { Section2PerkContainerStyle } from "../../../../style/molecule/home/container";
import Section2PerkBox from "./Section2PerkBox";

// section2 멤버쉽 혜택 콘텐츠 컨테이너
const Section2PerkContainer = () => {
  return (
    <div className={`${Section2PerkContainerStyle}`}>
      <Section2PerkBox
        id="1"
        title="어디서나 자유롭게 시청하세요"
        text1="각종 영화와 시리즈를 스마트폰, 태블릿, 노트북"
        text2="TV에서 무제한으로 제한없이"
        text3="스트리밍할 수 있습니다."
      />

      <Section2PerkBox
        id="2"
        title="TV로 즐겨보세요"
        text1="스마트 TV, PlatStation, Xbox, Chromecast,"
        text2="Apple TV, 블루레이 플레이어 등 다양한 "
        text3="디바이스에서 시청할 수 있습니다."
      />

      <Section2PerkBox
        id="3"
        title="오프라인으로 시청하세요"
        text1="즐겨 보는 콘텐츠를 저장해 오프라인으로 "
        text2="비행기, 기차, 잠수함 어디서든 "
        text3="시청할 수 있습니다."
      />
    </div>
  );
};

export default Section2PerkContainer;
