import {
  Section2PerkBoxStyle,
  Section2PerkTextBoxStyle,
} from "../../../../style/molecule/home/box";
import { PerkBoxPropsType } from "../../../../type/props/home";
import PerkMediaBox from "../../../atom/home/PerkMediaBox";
import SubText from "../../../atom/text/SubText";
import SubTitle from "../../../atom/text/SubTitle";

// section2 멤버쉽 혜택 콘텐츠 박스
// title은 콘텐츠 타이틀, text는 본문의 각 한줄, id는 이미지를 조건부 렌더링 할 키입니다.
const Section2PerkBox = ({
  title,
  text1,
  text2,
  text3,
  id,
}: PerkBoxPropsType) => {
  return (
    <div className={`${Section2PerkBoxStyle}`}>
      {id === "1" ? (
        <PerkMediaBox
          imgURL="/image/home/device-apile.png"
          videoURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
          padding="px-10 py-3"
        />
      ) : id === "2" ? (
        <PerkMediaBox
          imgURL="/image/home/tv.png"
          videoURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          padding="p-2"
        />
      ) : id === "3" ? (
        <PerkMediaBox imgURL="/image/home/mobile.gif" />
      ) : (
        <></>
      )}
      <SubTitle text={title} />
      <div className={`${Section2PerkTextBoxStyle}`}>
        <SubText text={text1} align="text-center" />
        <SubText text={text2} align="text-center" />
        <SubText text={text3} align="text-center" />
      </div>
    </div>
  );
};

export default Section2PerkBox;
