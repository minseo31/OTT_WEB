// 푸터 멤버쉽 클릭 시 스크롤 이동 이벤트
export const footerMembershipScrollEvent = () => {
  window.scrollTo({
    top: 2 * window.innerHeight,
    behavior: "smooth",
  });
};
