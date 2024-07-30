import { mainTextStyle } from '../../../style/atom/text';
import { TextPropsType } from '../../../type/props/atom';

// 본문 컴포넌트 - text는 컨텐츠 , align은 컨텐츠의 정렬 위치입니다. ( "text-center" or "text-start")
const MainText = ({ text, align }: TextPropsType) => {
  return <p className={`${mainTextStyle} ${align} `}>{text}</p>;
};

export default MainText;
