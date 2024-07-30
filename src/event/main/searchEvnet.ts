// 검색창 포커스 이벤트
export const searchInputFocusEvent = (
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>> | undefined,
  bool : boolean
) => {
  if (setSearchOpen && bool) {
    setSearchOpen((prev) => !prev);
  }
};

// 검색어가 바뀔 때 마다 발생하는 이벤트
export const searchInputChangeEvnet = (
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  value: string
) => {
  setInputValue(value);
};
