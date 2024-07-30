import { FiUser } from "react-icons/fi";
import { iconStyle } from "../../style/atom/icon";

// 유저 아이콘
const Usericon = () => {
  return (
    <div className={`${iconStyle} `}>
      <FiUser />
    </div>
  );
};

export default Usericon;
