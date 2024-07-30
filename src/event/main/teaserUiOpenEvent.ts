// 티저 모달 ui 오픈 이벤트
export const handelTeaserUiOpen = (
  setUiOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setUiOpen((prev) => !prev);
};
