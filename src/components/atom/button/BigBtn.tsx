import { bigRedBtnStyle } from "../../../style/atom/button";
import { BtnPropsType } from "../../../type/props/atom";

// 큰 크기의 버튼 - text는 콘텐츠 , bgcolor는 배경색입니다. (배경색 레드 | 살짝 투명한 블랙) , border는 외곽선입니다.
const BigBtn = ({ text, bgColor, border, textColor }: BtnPropsType) => {
  return (
    <button
      className={`${bigRedBtnStyle} ${bgColor} ${border}`}
      style={{ color: textColor }}
    >
      {text}
    </button>
  );
};

export default BigBtn;
