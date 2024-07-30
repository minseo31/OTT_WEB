import { RedSmallTextStyle, SmallTextStyle } from '../../../style/atom/text';
import { SmallTextPropsType } from '../../../type/props/atom';

// 제일 작은 폰트 사이즈  - text는 콘텐츠입니다.
const SmallTextRed = ({ text }: SmallTextPropsType) => {
  return <p className={`${RedSmallTextStyle}`}>{text}</p>;
};

export default SmallTextRed;
