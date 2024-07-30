import { CiSearch } from "react-icons/ci";
import { iconStyle } from "../../style/atom/icon";

// 검색 아이콘 (돋보기)
const Searchicon = () => {
  return (
    <div className={`${iconStyle}`}>
      <CiSearch />
    </div>
  );
};

export default Searchicon;
