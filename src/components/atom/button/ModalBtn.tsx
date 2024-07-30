import { closeBtnStyle } from "../../../style/atom/button";
import { BtnPropsType } from "../../../type/props/atom";

// 모달 닫기 버튼 - text는 콘텐츠 , bgcolor는 배경색입니다. (배경색 레드 | 살짝 투명한 블랙)
const ModalBtn = ({ text, bgColor }: BtnPropsType) => {
  return <button className={`${closeBtnStyle} ${bgColor}`}>{text}</button>;
};

export default ModalBtn;
