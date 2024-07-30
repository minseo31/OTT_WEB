import { formBtnStyle } from "../../../style/atom/button";
import { BtnPropsType } from "../../../type/props/atom";

// 폼 버튼 - text는 콘텐츠 , bgcolor는 배경색입니다. (배경색 레드 | 살짝 투명한 블랙)
const FormBtn = ({ text, bgColor, onClick }: BtnPropsType) => {
  return (
    <button onClick={onClick} className={`${formBtnStyle} ${bgColor}`}>
      {text}
    </button>
  );
};

export default FormBtn;
