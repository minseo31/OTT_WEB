import { homeSection1Style } from "../../../style/cluster/home/section";
import { HomePagePropsType } from "../../../type/props/home";
import MainBgImg from "../../atom/bg/MainBgImg";
import SectionTitleContainer from "../../molecule/home/section1/Section1TitleBox";

// 홈 페이지 section1
const Section1 = ({ setSignMove }: HomePagePropsType) => {
  return (
    <section className={`${homeSection1Style}`}>
      <MainBgImg />
      <SectionTitleContainer setSignMove={setSignMove} />
    </section>
  );
};

export default Section1;
