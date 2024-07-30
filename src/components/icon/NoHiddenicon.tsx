import { IoEyeSharp } from "react-icons/io5";
import { constHiddeniconStyle } from "../../style/atom/icon";

// 패스워드 보이기 아이콘
const NoHiddenicon = () => {
  return (
    <div className={`${constHiddeniconStyle}`}>
      <IoEyeSharp />
    </div>
  );
};

export default NoHiddenicon;
