import { headerContainerStyle } from "../../../style/cluster/home/header";
import { HomePagePropsType } from "../../../type/props/home";
import HeaderContentContainer from "../../molecule/home/HeaderContentContainer";

// 홈 페이지 헤더 컴포넌트
const Header = ({ setSignMove } : HomePagePropsType) => {
  return (
    <header className={`${headerContainerStyle}`}>
      <HeaderContentContainer setSignMove={setSignMove}/>
    </header>
  );
};

export default Header;
