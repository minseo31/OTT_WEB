import {
  searchInputChangeEvnet,
  searchInputFocusEvent,
} from "../../../event/main/searchEvnet";
import {
  searchIconBoxStyle,
  searchInputBoxStyle,
  searchInputStyle,
} from "../../../style/molecule/main/search";
import { SearchImputPropsType } from "../../../type/props/main";
import Searchicon from "../../icon/Searchicon";

// 검색 박스
const MainInput = ({ setSearchOpen, setInputValue }: SearchImputPropsType) => {
  return (
    <div className={`${searchInputBoxStyle}`}>
      <input
        type="text"
        className={`${searchInputStyle}`}
        placeholder="찾으시는 영화나 시리즈가 있으신가요?"
        onClick={() => searchInputFocusEvent(setSearchOpen, true)}
        onChange={(e) => searchInputChangeEvnet(setInputValue, e.target.value)}
      />
      <div className={`${searchIconBoxStyle}`}>
        <Searchicon />
      </div>
    </div>
  );
};

export default MainInput;
