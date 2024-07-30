import { FaEyeSlash } from "react-icons/fa6";
import { constHiddeniconStyle } from "../../style/atom/icon";

// 패스워드 안보이기 아이콘
const Hiddenicon = () => {
  return (
    <div className={`${constHiddeniconStyle}`}>
      <FaEyeSlash />
    </div>
  );
};

export default Hiddenicon;
