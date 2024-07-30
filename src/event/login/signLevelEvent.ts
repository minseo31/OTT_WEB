// 가입 단계 증감 이벤트
export const handleSignLevel = (
  setSignLevel: React.Dispatch<React.SetStateAction<0 | 1 | 2 | 3 | 4>>,
  level: 0 | 1 | 2 | 3 | 4
) => {
  setSignLevel(level);
};

// 가입단계 증감 이벤트의 컨테이너의 움직임
export const signLevelActive = (signLevel: 0 | 1 | 2 | 3 | 4) => {
  if (signLevel === 0) {
    return "left-0";
  }
  if (signLevel === 1) {
    return "left-[-100vw]";
  }
  if (signLevel === 2) {
    return "left-[-200vw]";
  }
  if (signLevel === 3) {
    return "left-[-300vw]";
  }
  if (signLevel === 4) {
    return "left-[-400vw]";
  }
};
