import { Link } from "react-router-dom";
import { PointtextPropsType } from "../../../type/props/atom";
import { PointTextStyle } from "../../../style/atom/text";

// 하이퍼 텍스트 컴포넌트 - url은 하이퍼 링크, text는 콘텐츠 , size는 폰트 사이즈 입니다.
const PointText = ({ url, text, size }: PointtextPropsType) => {
  return (
    <Link to={url} className={`${PointTextStyle} ${size}`}>
      {text}
    </Link>
  );
};

export default PointText;
