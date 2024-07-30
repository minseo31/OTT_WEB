import { Section2MemberAdTextBox } from "../../../../style/molecule/home/box";
import PopcornImg from "../../../atom/home/PopcornImg";
import PointText from "../../../atom/text/PointText";
import SubText from "../../../atom/text/SubText";
import SubTitle from "../../../atom/text/SubTitle";

// section2 광고형 스탠다드멤버쉽 광고 콘텐츠 박스
const Section2MemberAdBox = () => {
  return (
    <div className="section2-member-ad-box">
      <PopcornImg />
      <div className={`${Section2MemberAdTextBox}`}>
        <SubTitle text="5,500원이면 넷플릭스의 멤버가 될 수 있습니다" />
        <SubText
          text="지금 바로 광고형 스탠다드 멤버쉽에 가입하세요!"
          align="text-start"
        />
        {/* 클릭 시 스크롤 이동 해야함 */}
        <div
          onClick={() => {
            window.scrollTo({
              top: 3.7 * window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <PointText text="자세히 알아보기 →" size="text-xs" url="/" />
        </div>
      </div>
    </div>
  );
};

export default Section2MemberAdBox;
