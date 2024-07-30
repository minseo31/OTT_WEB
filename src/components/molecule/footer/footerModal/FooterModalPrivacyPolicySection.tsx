import { footerModalPrivacyPolicyData } from "../../../../data/footerData";
import {
  FooterModalPrivacyPolicyStyle,
  FooterModalTextStyle,
} from "../../../../style/modal/footerModal/footerModal";
import {
  FooterModalPrivacyPolicySectionType,
  FooterModalTextType,
} from "../../../../type/data/footerData";
import MainText from "../../../atom/text/MainText";
import SubText from "../../../atom/text/SubText";

// 푸터 모달 개인정보 처리방침
const FooterModalPrivacyPolicySection = () => {
  return (
    <div className={`${FooterModalTextStyle}`}>
      <div className="pt-5">
        {footerModalPrivacyPolicyData.sections.map(
          (section: FooterModalPrivacyPolicySectionType) => (
            <div
              key={section.id}
              className={`${FooterModalPrivacyPolicyStyle}`}
            >
              {section.texts.map((text: FooterModalTextType) =>
                text.id === "pt" ? (
                  <MainText
                    key={text.id}
                    text={text.text}
                    align="text-center"
                  />
                ) : (
                  <SubText key={text.id} text={text.text} align="text-center" />
                )
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FooterModalPrivacyPolicySection;
