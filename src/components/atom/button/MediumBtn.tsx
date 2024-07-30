import { mediumRedBtnStyle } from "../../../style/atom/button";
import { BtnPropsType } from "../../../type/props/atom";

// 중간 크기의 버튼 - text는 콘텐츠 , bgcolor는 배경색입니다. (배경색 레드 | 살짝 투명한 블랙), border는 외곽선입니다.
const MediumBtn = ({ text, bgColor, border }: BtnPropsType) => {
  return (
    <button className={`${mediumRedBtnStyle} ${bgColor} ${border}`}>
      {text}
    </button>
  );
};

export default MediumBtn;
