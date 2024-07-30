import { Section3MembershipContainerStyle } from "../../../../style/molecule/home/container";
import { MembershipContainerPropsType } from "../../../../type/props/home";
import MembershipBgImg from "../../../atom/home/MembershipBgImg";
import Section3MembershipContentBox from "./Section3MembershipContentBox";

// section3 멤버쉽 컨테이너
const Section3MembershipContainer = ({
  imgURL,
  title1,
  title2,
  price,
  quality,
  resolution,
  members,
  ad,
  devices1,
  devices2,
  sound,
  text1,
  text2,
  setSignMove,
}: MembershipContainerPropsType) => {
  return (
    <div className={`${Section3MembershipContainerStyle}`}>
      <MembershipBgImg imgURL={imgURL} />
      <Section3MembershipContentBox
        title1={title1}
        title2={title2}
        text1={text1}
        text2={text2}
        price={price}
        quality={quality}
        resolution={resolution}
        sound={sound}
        devices1={devices1}
        devices2={devices2}
        members={members}
        ad={ad}
        setSignMove={setSignMove}
      />
    </div>
  );
};

export default Section3MembershipContainer;
