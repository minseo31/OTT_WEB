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

// 메인페이지
const MainBannerContainer = ({
  setBannerPosition,
  bannerPosition,
}: MainBannerPropsType) => {
  // 배너 이미지 넓이 값을 구하기 위한 ref
  const banerImgRef = useRef<HTMLImageElement>(null);
  // 배너 현재 페이지 값
  const [banerPage, setBannerPage] = useState<number>(1);

  // -----------------------------------------------
  const 진짜넷플릭스 = () => {
    const confirmed = window.confirm(
      "진짜 넷플릭스 홈페이지로 이동하시겠습니까?"
    );
    if (confirmed) {
      window.location.href = "https://www.netflix.com/kr/";
    }
  };

  // ----------------------------------------------

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
          <img
            ref={banerImgRef}
            src="/image/banner/banner1.gif"
            alt=""
            className={`${mainBannerImgStyle}`}
            onClick={() => 진짜넷플릭스()}
          />
          <img
            src="/image/banner/banner2.jpg"
            alt=""
            className={`${mainBannerImgStyle}`}
          />
          <img
            src="/image/banner/banner3.jpg"
            alt=""
            className={`${mainBannerImgStyle}`}
          />
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
