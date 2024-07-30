import { homeSection3Style } from "../../../style/cluster/home/section";
import { HomePagePropsType } from "../../../type/props/home";
import Section3MembershipContainer from "../../molecule/home/section3/Section3MembershipContainer";

// 홈 페이지 section3
const Section3 = ({ setSignMove }: HomePagePropsType) => {
  return (
    <section className={`${homeSection3Style}`}>
      <Section3MembershipContainer
        imgURL="/image/home/home-memebership-bg1.jpg"
        title1="프리미엄(Premium)"
        title2="4K+HDR"
        text1="의 가장 좋은 환경에서의"
        text2="많은 기능과 콘텐츠를 사용할 수 있는 멤버쉽 입니다."
        price="17,000원"
        quality="가장 좋음"
        resolution="4K(UHD) + HDR"
        members="4명"
        ad="광고 없음"
        devices1="TV , 컴퓨터 , 스마트폰 , 태블릿"
        devices2="6기종"
        sound="포함"
        setSignMove={setSignMove}
      />
      <Section3MembershipContainer
        imgURL="/image/home/home-memebership-bg2.jpg"
        title1="스탠다드(Standard)"
        title2="1080p"
        text1="콘텐츠를 이용하기에 적절하며"
        text2="광고가 없는 멤버쉽 입니다."
        price="13,500원"
        quality="좋음"
        resolution="1080p"
        members="2명"
        ad="광고 없음"
        devices1="TV , 컴퓨터 , 스마트폰 , 태블릿"
        devices2="2기종"
        sound="없음"
        setSignMove={setSignMove}
      />
      <Section3MembershipContainer
        imgURL="/image/home/home-memebership-bg3.jpg"
        title1="광고형스탠다드(AD)"
        title2="1080p"
        text1="의 멤버쉽 요금에 부담감 없이"
        text2="적절한 콘텐츠를 즐기기에 좋은 멤버쉽 입니다."
        price="5,500원"
        quality="좋음"
        resolution="1080p"
        members="2명"
        ad="광고 포함"
        devices1="TV , 컴퓨터 , 스마트폰 , 태블릿"
        devices2="2기종"
        sound="없음"
        setSignMove={setSignMove}
      />
    </section>
  );
};

export default Section3;
