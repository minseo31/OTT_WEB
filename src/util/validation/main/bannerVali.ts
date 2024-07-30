// 배너 페이지 제한 함수 (배너 페이지 범위내에서만 움직이도록 함)
export const bannerConutVali = (
  banerPage: number,
  setBannerPage: React.Dispatch<React.SetStateAction<number>>
) => {
  // 배너 페이지가 0 보다 작거나 같을 떄 (마이너스 값일때)
  if (banerPage <= 0) {
    setBannerPage(1);
  }
  // 배너 페이지가 4보다 크거나 같을 떄 (배너 페이지 값을 벗어날 때)
  if (banerPage >= 4) {
    setBannerPage(3);
  }
};
