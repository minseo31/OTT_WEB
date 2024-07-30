import { homeSection2Style } from "../../../style/cluster/home/section";
import Section2ContentContainer from "../../molecule/home/section2/Section2ContentContainer";

// 홈 페이지 section2
const Section2 = () => {
  return (
    <section className={`${homeSection2Style}`}>
      <Section2ContentContainer />
    </section>
  );
};

export default Section2;
