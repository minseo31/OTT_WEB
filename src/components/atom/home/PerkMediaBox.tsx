import { PerkImgStyle, PerkvideoStyle } from "../../../style/atom/home";
import { Section2PerkMediaBoxStyle } from "../../../style/molecule/home/box";
import { PerkMediaPropsType } from "../../../type/props/home";

// section2 멤버쉽 혜택 콘텐츠 Tv
const PerkMediaBox = ({ videoURL, imgURL, padding }: PerkMediaPropsType) => {
  return (
    <div className={`${Section2PerkMediaBoxStyle}`}>
      <img src={imgURL} alt="" className={`${PerkImgStyle}`} />
      <video className={`${PerkvideoStyle} ${padding}`} autoPlay muted loop>
        <source src={videoURL} />
      </video>
    </div>
  );
};

export default PerkMediaBox;
