import { Link } from "react-router-dom";
import {
  footerContentListBoxStyle,
  footerSnsBox,
  footerSnsImg,
} from "../../../style/cluster/Footer";
import SubText from "../../atom/text/SubText";

// 푸터 sns 콘텐츠 박스
const FooterListSnsBox = () => {
  return (
    <div className={`${footerContentListBoxStyle}`}>
      <SubText text="소식보기" align="text-start" />
      <div className={`${footerSnsBox}`}>
        <Link to="https://www.instagram.com/netflixkr/">
          <img
            src="/image/sns/insta.png"
            alt=""
            className={`${footerSnsImg}`}
          />
        </Link>
        <Link to="https://www.youtube.com/@NetflixKorea">
          <img
            src="/image/sns/youtube.png"
            alt=""
            className={`${footerSnsImg}`}
          />
        </Link>
      </div>
    </div>
  );
};

export default FooterListSnsBox;
