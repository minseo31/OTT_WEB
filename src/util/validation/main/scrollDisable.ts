// 스크롤 제한
export const scrollDisable = (Modal: boolean) => {
  Modal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
};
