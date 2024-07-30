import { shortLogoStyle } from "../../../style/atom/logo";

// 짧은 로고 이미지 컴포넌트 (N)
const Shortlogo = () => {
  return (
    <img
      src="/image/logo/netflix-logo1.png"
      alt="Netflix"
      className={`${shortLogoStyle}`}
    />
  );
};

export default Shortlogo;
