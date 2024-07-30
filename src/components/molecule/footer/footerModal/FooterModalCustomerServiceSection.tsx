import { footerModalCustomerServiceStyle } from "../../../../style/modal/footerModal/footerModal";
import MainTitle from "../../../atom/text/MainTitle";
import SubText from "../../../atom/text/SubText";
import SubTitle from "../../../atom/text/SubTitle";

// 푸터 모달 고객센터
const FooterModalCustomerServiceSection = () => {
  return (
    <div className={`${footerModalCustomerServiceStyle}`}>
      <SubTitle text="문의 하실 내용 있으신가요?" align="text-center"/>
      <div>
        <SubText
          text="문의 할 내용이 있다면 메일로 보내주시면"
          align="text-center"
        />
        <SubText
          text="최대한 빠른 시일내에 확인해드리겠습니다."
          align="text-center"
        />
      </div>
      <MainTitle text="문의 메일" align="text-center" />
      <MainTitle text="netflix@netflix.com" align="text-center" />
    </div>
  );
};

export default FooterModalCustomerServiceSection;
