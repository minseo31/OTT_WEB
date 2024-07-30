import { iconStyle } from "../../style/atom/icon";
import { TbCategory } from "react-icons/tb";

// 카테고리 아이콘
const Categoryicon = () => {
  return (
    <div className={`${iconStyle}`}>
      <TbCategory />
    </div>
  );
};

export default Categoryicon;
