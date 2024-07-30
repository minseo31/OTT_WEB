import { fullLogoStyle } from "../../../style/atom/logo";
import { LogoPropsType } from "../../../type/props/atom";

// 풀 스펠링 로고 -  홈 페이지 타이틀 | 폼  | 사이드 바 or 푸터 | 모달 | 본문
const Fulllogo = ({ width, height }: LogoPropsType) => {
  return (
    <img
      src="/image/logo/netflix-logo2.png"
      alt="Netflix"
      className={`${fullLogoStyle} ${width} ${height}`}
    />
  );
};

export default Fulllogo;
