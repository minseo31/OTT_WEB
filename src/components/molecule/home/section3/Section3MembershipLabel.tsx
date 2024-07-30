import { MembershipLabelPropsType } from "../../../../type/props/home";
import SubTitle from "../../../atom/text/SubTitle";

// section3 멤버쉽 라벨
const Section3MembershipLabel = ({
  title1,
  title2,
  width,
  height,
}: MembershipLabelPropsType) => {
  return (
    <div
      style={{
        width: `${width}`,
        height: `${height}`,
        padding: "10px",
        borderRadius: "10px",
        backgroundImage: `linear-gradient(to right,
            #11111175 0%,
            #28186785 10%,
            #e5091495,
            #28186785 90%,
            #11111175 100%
          )`,
      }}
    >
      <SubTitle text={title1} align="text-start" />
      <SubTitle text={title2} align="text-start" />
    </div>
  );
};

export default Section3MembershipLabel;
