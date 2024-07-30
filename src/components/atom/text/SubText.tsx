import { subTextStyile } from "../../../style/atom/text";
import { TextPropsType } from "../../../type/props/atom";

// 서브 본문 컴포넌트 - text는 콘텐츠 , align은 콘텐츠 정렬입니다. ( "text-center" or "text-start")
const SubText = ({ text, align }: TextPropsType) => {
  return <p className={`${subTextStyile} ${align}`}>{text}</p>;
};

export default SubText;
