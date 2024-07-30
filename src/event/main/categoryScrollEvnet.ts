// 카테고리 스크롤 버튼 클릭 이벤트
export const categotyScrollClickEvnet = (
  categoryRef: React.RefObject<HTMLDivElement> | undefined,
  bool: boolean
) => {
  // 참조된 요소 가져오기
  const scrollRef = categoryRef?.current;

  // 요소가 존재할 경우
  if (scrollRef) {
    const scrollAmount = 265; // 한 번에 스크롤할 픽셀 수
    const currentScrollPosition = scrollRef.scrollLeft;

    if (bool) {
      // bool이 true인 경우, 오른쪽으로 250px 스크롤
      const newScrollPosition = currentScrollPosition + scrollAmount;
      scrollRef.scrollTo({ left: newScrollPosition, behavior: "smooth" });
    } else {
      // bool이 false인 경우, 왼쪽으로 250px 스크롤
      const newScrollPosition = currentScrollPosition - scrollAmount;
      scrollRef.scrollTo({ left: newScrollPosition, behavior: "smooth" });
    }
  }
};
// 카테고리 마우스 다운 스크롤 이벤트
export const categoryScrollMouseDown = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>,
  setStartX: React.Dispatch<React.SetStateAction<number | null>>,
  setScrollLeft: React.Dispatch<React.SetStateAction<number | null>>,
  categoryRef: React.RefObject<HTMLDivElement>
) => {
  // 카테고리 ref
  const scrollRef = categoryRef?.current;
  if (scrollRef) {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(scrollRef.scrollLeft);
  }
};

// 카테고리 마우스 업 스크롤 이벤트
export const categoryScrollMouseUp = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsDragging(false);
};

// 카테고리 마우스 무브 스크롤 이벤트
export const categoryScrollMouseMove = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  isDragging: boolean,
  startX: number | null,
  scrollLeft: number | null,
  categoryRef: React.RefObject<HTMLDivElement>
) => {
  // 카테고리 ref
  const scrollRef = categoryRef?.current;
  if (!isDragging) return;
  if (startX !== null && scrollLeft !== null && scrollRef) {
    const x = e.pageX;
    const distance = x - startX;
    scrollRef.scrollLeft = scrollLeft - distance;
  }
};

// 카테고리 마우스 이탈 스크롤 이벤트
export const categoryScrollMouseLeave = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {};
