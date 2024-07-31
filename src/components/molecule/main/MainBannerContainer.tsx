import { useRef, useState } from "react";
import { handleBannerEvent } from "../../../event/main/bannerEvnet";
import {
  MainBannerContainerStyle,
  MainBannerStyle,
  mainBannerBoxStyle,
  mainBannerImgStyle,
} from "../../../style/molecule/main/banner";
import { MainBannerPropsType } from "../../../type/props/main";
import Arrowicon from "../../icon/Arrowicon";
import SubTitle from "../../atom/text/SubTitle";
import { Link } from "react-router-dom";

// 메인페이지
const MainBannerContainer = ({
  setBannerPosition,
  bannerPosition,
}: MainBannerPropsType) => {
  // 배너 이미지 넓이 값을 구하기 위한 ref
  const banerImgRef = useRef<HTMLImageElement>(null);
  // 배너 현재 페이지 값
  const [banerPage, setBannerPage] = useState<number>(1);

  return (
    <div className={`${MainBannerContainerStyle} `}>
      {/* 왼쪽 넘기기 */}
      <button
        onClick={() =>
          handleBannerEvent(
            setBannerPosition,
            banerImgRef,
            false,
            setBannerPage,
            banerPage
          )
        }
        disabled={banerPage <= 1}
        className="disabled:opacity-0"
      >
        <Arrowicon direction="rotate-180" />
      </button>
      {/* 배너 이미지 컨테이너 */}
      <div className={`${mainBannerBoxStyle}`}>
        <div
          className={`${MainBannerStyle} transition-all duration-500`}
          style={{ left: `${bannerPosition}px` }}
        >
          <Link to="https://about.netflix.com/ko">
            <img
              ref={banerImgRef}
              src="/image/banner/banner1.gif"
              alt="Netflix Banner1"
              className={`${mainBannerImgStyle}`}
            />
          </Link>
          <Link to="https://youtu.be/hU05_Rkm8qE?si=taYVyMDlPhaNVIBY">
            <video className={`${mainBannerImgStyle}`} autoPlay muted loop>
              <source src="/image/banner/banner2.mp4" type="video/mp4" />
            </video>
          </Link>
          <Link to="https://youtu.be/EiCmnIaj4u8?si=FAs1GRVGkG2zsrvA">
            <video className={`${mainBannerImgStyle}`} autoPlay muted loop>
              <source src="/image/banner/banner3.mp4" type="video/mp4" />
            </video>
          </Link>
        </div>
      </div>
      {/* 오른쪽 넘기기 */}
      <button
        onClick={() =>
          handleBannerEvent(
            setBannerPosition,
            banerImgRef,
            true,
            setBannerPage,
            banerPage
          )
        }
        disabled={banerPage >= 3}
        className="disabled:opacity-0"
      >
        <Arrowicon direction="rotate-0" />
      </button>
    </div>
  );
};

export default MainBannerContainer;

