import { bannerConutVali } from "../../util/validation/main/bannerVali";

// 배너 컨테이너 넘기기 이벤트
export const handleBannerEvent = (
  setBannerPosition: React.Dispatch<React.SetStateAction<number>>,
  banerImgRef: React.RefObject<HTMLImageElement>,
  bool: boolean,
  setBannerPage: React.Dispatch<React.SetStateAction<number>>,
  banerPage: number
) => {
  if (bool) {
    // 배너 페이지 증가
    setBannerPage((prev) => (prev += 1));
    // 배너 페이지 범위를 벗어나는 지 검사
    bannerConutVali(banerPage, setBannerPage);
    // 너비 값 만큼 위치값 증가
    setBannerPosition((prev) => (prev -= banerImgRef.current!.width));
  } else {
    // 배너 페이지 감소
    setBannerPage((prev) => (prev -= 1));
    // 배너 페이지 범위를 벗어나는 지 검사
    bannerConutVali(banerPage, setBannerPage);
    // 너비 값 만큼 위치값 감소
    setBannerPosition((prev) => (prev += banerImgRef.current!.width));
  }
};
