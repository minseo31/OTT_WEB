// 멤버쉽 보기 스크롤 이동 이벤트
export const membershipMove = () => {
  // 전체 스크롤 이동
  window.scrollTo({
    top: window.innerHeight * 2, // 뷰포트 높이의 2배를 스크롤이동하여 세번쨰 section 멤버쉽 종류로 이동
    behavior: "smooth", // 부드럽게
  });
};

export default membershipMove;
