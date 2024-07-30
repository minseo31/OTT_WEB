import { mainTitleStyle } from "../../../style/atom/text";
import { TitlePropsType } from "../../../type/props/atom";

// 메인 타이틀 - text는 콘텐츠 입니다.
const MainTitle = ({ text }: TitlePropsType) => {
  return <h1 className={`${mainTitleStyle}`}>{text}</h1>;
};

export default MainTitle;
