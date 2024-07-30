import { TextBoxStyle } from "../../style/molecule/home/box";
import { ChildrenPropsType } from "../../type/props/atom";

// 본문 박스
const TextBox = ({ children } : ChildrenPropsType) => {
  return <div className={`${TextBoxStyle}`}>{children}</div>;
};

export default TextBox;
