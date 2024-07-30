import { BtnBoxStyle } from "../../style/molecule/box";
import { ChildrenPropsType } from "../../type/props/atom";

// section1 의 타이틀 버튼 박스
const BtnBox = ({ children }: ChildrenPropsType) => {
  return <div className={`${BtnBoxStyle} `}>{children}</div>;
};

export default BtnBox;
