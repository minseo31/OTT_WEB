import { HiArrowUturnLeft } from "react-icons/hi2";
import { iconStyle } from "../../style/atom/icon";

// 화살표 아이콘 - direction은 rotate방향 값입니다. (rotate-180 or rotate-0)
const BackArrowicon = () => {
  return (
    <div className={`${iconStyle} z-[999] `}>
      <HiArrowUturnLeft />
    </div>
  );
};

export default BackArrowicon;
