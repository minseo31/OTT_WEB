import { SmallTextStyle } from "../../../style/atom/text";
import { SmallTextPropsType } from "../../../type/props/atom";

// 제일 작은 폰트 사이즈  - text는 콘텐츠입니다.
const SmallText = ({ text, align }: SmallTextPropsType) => {
  return <p className={`${SmallTextStyle} ${align}`}>{text}</p>;
};

export default SmallText;
