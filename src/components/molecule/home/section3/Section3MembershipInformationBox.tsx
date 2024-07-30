import {
  MembershipInformationListStyle1,
  MembershipInformationListStyle2,
} from "../../../../style/atom/home";
import { Section3MembershipInformationBoxStyle } from "../../../../style/molecule/home/box";
import { MemebershipInformationBoxPropsType } from "../../../../type/props/home";
import MainText from "../../../atom/text/MainText";

// 멤버쉽 상세정보 리스트 박스
const Section3MembershipInformationBox = ({
  price,
  quality,
  resolution,
  members,
  ad,
  devices1,
  devices2,
  sound,
}: MemebershipInformationBoxPropsType) => {
  return (
    <div className={`${Section3MembershipInformationBoxStyle}`}>
      <div className={`${MembershipInformationListStyle1}`}>
        <MainText text={`월 요금 - ${price}`} align="text-start" />
      </div>
      <div className={`${MembershipInformationListStyle2}`}>
        <MainText text={`화질과 음질 - ${quality}`} align="text-start" />
      </div>
      <div className={`${MembershipInformationListStyle1}`}>
        <MainText text={`해상도 - ${resolution}`} align="text-start" />
      </div>
      <div className={`${MembershipInformationListStyle2}`}>
        <MainText
          text={`공간 음향(이머시브 사운드) - ${sound}`}
          align="text-start"
        />
      </div>
      <div className={`${MembershipInformationListStyle1}`}>
        <MainText text={`지원 디바이스 - ${devices1}`} align="text-start" />
      </div>
      <div className={`${MembershipInformationListStyle2}`}>
        <MainText
          text={`가구 구성원 간 동시 접속자 수 - ${members}`}
          align="text-start"
        />
      </div>
      <div className={`${MembershipInformationListStyle1}`}>
        <MainText text={`저장 디바이스 - ${devices2}`} align="text-start" />
      </div>
      <div className={`${MembershipInformationListStyle2}`}>
        <MainText text={`광고 - ${ad}`} align="text-start" />
      </div>
    </div>
  );
};

export default Section3MembershipInformationBox;
