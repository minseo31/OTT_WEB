import { Link } from "react-router-dom";
import { Section3MembershipLeftContentBoxStyle } from "../../../../style/molecule/home/box";
import { Section3MembershipContentBoxStyle } from "../../../../style/molecule/home/container";
import { MembershipContentBoxPropsType } from "../../../../type/props/home";
import MediumBtn from "../../../atom/button/MediumBtn";
import Section3MembershipInformationBox from "./Section3MembershipInformationBox";
import Section3MembershipLabel from "./Section3MembershipLabel";
import Section3MembershipTextBox from "./Section3MembershipTextBox";

// section3 멤버쉽 콘텐츠 박스
const Section3MembershipContentBox = ({
  title1,
  title2,
  text1,
  text2,
  price,
  quality,
  resolution,
  members,
  ad,
  devices1,
  devices2,
  sound,
  setSignMove,
}: MembershipContentBoxPropsType) => {
  return (
    <div className={`${Section3MembershipContentBoxStyle}`}>
      <div className={`${Section3MembershipLeftContentBoxStyle}`}>
        <Section3MembershipLabel
          title1={title1}
          title2={title2}
          width="450px"
          height="100px"
        />
        <Section3MembershipTextBox text1={text1} text2={text2} />
        {/* 로그인 페이지로 이동 */}
        <Link
          to="/login"
          onClick={() => {
            setSignMove(true);
            window.scrollTo(0, 0);
          }}
        >
          <MediumBtn text="등록하기" bgColor="bg-main_Red" />
        </Link>
      </div>
      <Section3MembershipInformationBox
        price={price}
        quality={quality}
        resolution={resolution}
        sound={sound}
        devices1={devices1}
        devices2={devices2}
        members={members}
        ad={ad}
      />
    </div>
  );
};

export default Section3MembershipContentBox;
