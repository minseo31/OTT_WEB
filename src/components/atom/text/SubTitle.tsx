import { subTitleStyle } from "../../../style/atom/text";
import { TitlePropsType } from "../../../type/props/atom";

// 서브 타이틀 - text는 콘텐츠 입니다.
const SubTitle = ({ text, align }: TitlePropsType) => {
  return <h2 className={`${subTitleStyle} ${align}`}>{text}</h2>;
};
export default SubTitle;
