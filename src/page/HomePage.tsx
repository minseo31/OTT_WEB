import MainTitle from "../components/atom/text/MainTitle";
import Footer from "../components/cluster/Footer";
import Header from "../components/cluster/home/Header";
import Section1 from "../components/cluster/home/Section1";
import Section2 from "../components/cluster/home/Section2";
import Section3 from "../components/cluster/home/Section3";
import { HomePagePropsType } from "../type/props/home";

// 홈 페이지
const HomePage = ({ setSignMove }: HomePagePropsType) => {
  return (
    <div className="w-screen h-fit bg-black overflow-x-hidden">
      <Header setSignMove={setSignMove} />
      <Section1 setSignMove={setSignMove} />
      <Section2 />
      <MainTitle text="멤버쉽 종류" />
      <Section3 setSignMove={setSignMove} />
      <Footer />
    </div>
  );
};

export default HomePage;
