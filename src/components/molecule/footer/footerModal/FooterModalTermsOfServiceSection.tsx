import { FooterModalTermsOfServiceData } from "../../../../data/footerData";
import {
  FooterModalTermsOfServiceDetailStyle,
  FooterModalTermsOfSevicePaddingStyle,
  FooterModalTextStyle,
} from "../../../../style/modal/footerModal/footerModal";
import {
  FooterModalTermsOfServiceSectionType,
  FooterModalTermsOfServiceTextType,
  FooterModalTextType,
} from "../../../../type/data/footerData";
import MainText from "../../../atom/text/MainText";
import SubText from "../../../atom/text/SubText";

// 푸터 모달 이용약관
const FooterModalTermsOfServiceSection = () => {
  return (
    <div className={`${FooterModalTextStyle}`}>
      {FooterModalTermsOfServiceData.sections.map(
        (section: FooterModalTermsOfServiceSectionType) => (
          <div
            key={section.id}
            className={`${FooterModalTermsOfServiceDetailStyle}`}
          >
            <MainText
              key={section.id}
              text={section.title}
              align="text-center"
            />
            {section.texts.map((text: FooterModalTermsOfServiceTextType) => (
              <div
                key={text.id}
                className={`${FooterModalTermsOfSevicePaddingStyle}`}
              >
                {text.paragraphs.map((paragraph: FooterModalTextType) => (
                  <SubText
                    key={paragraph.id}
                    text={paragraph.text}
                    align="text-center"
                  />
                ))}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default FooterModalTermsOfServiceSection;
