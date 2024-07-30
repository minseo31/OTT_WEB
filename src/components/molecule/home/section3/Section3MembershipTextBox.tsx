import {
  Section3MembershipTextBoxStyle2,
  TextBoxStyle,
} from "../../../../style/molecule/home/box";
import { MembershipTextBox } from "../../../../type/props/home";
import Fulllogo from "../../../atom/logo/Fulllogo";
import MainText from "../../../atom/text/MainText";

// 멤버쉽 설명 텍스트
const Section3MembershipTextBox = ({ text1, text2 }: MembershipTextBox) => {
  return (
    <div className={`${TextBoxStyle}`}>
      <div className={`${Section3MembershipTextBoxStyle2}`}>
        <Fulllogo width="w-[80px]" height="h-[40px]" />
        <MainText text={text1} align="text-start" />
      </div>
      <MainText text={text2} align="text-start" />
    </div>
  );
};

export default Section3MembershipTextBox;
