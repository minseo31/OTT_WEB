import { handleMembershipModalOpen } from "../../../event/login/modalOpenEvent";
import { subTextStyile } from "../../../style/atom/text";
import {
  signMembershipBoxStyle,
  signMembershipTextBoxStyle,
} from "../../../style/molecule/login/container";
import {
  MembershipType,
  SignMembershipBoxPropsType,
} from "../../../type/props/login";
import SubText from "../../atom/text/SubText";
import SignMembershipModal from "../../modal/SignMembershipModal";
import Section3MembershipLabel from "../home/section3/Section3MembershipLabel";
import {
  IsSideBarOpenStateType,
  MembershgipModalStateType,
} from "../../../type/state";

type PropsType = {
  MembershipData: MembershipType;
  openModal: boolean;
  setOpenModal: IsSideBarOpenStateType;
  setMembership: (id: "p_membership" | "s_membership" | "a_membership") => void; // Updated type
  membership: "p_membership" | "s_membership" | "a_membership";
};

const SignMembershipBox = ({
  MembershipData,
  openModal,
  setOpenModal,
  setMembership,
  membership,
}: PropsType) => {
  return (
    <div className={`${signMembershipBoxStyle}`}>
      <Section3MembershipLabel
        width="350px"
        height="100px"
        title1={MembershipData.name1}
        title2={MembershipData.name2}
      />
      <div className={`${signMembershipTextBoxStyle}`}>
        <SubText text={MembershipData.info} align="text-center" />
      </div>
      <span
        className={`${subTextStyile} underline`}
        onClick={() => {
          setMembership(MembershipData.id); // Update membership ID
          setOpenModal(true); // Open modal
        }}
      >
        자세히 알아보기
      </span>
      {openModal && MembershipData.id === membership && (
        <SignMembershipModal
          MembershipData={MembershipData}
          openModal={openModal}
          setOpenModal={setOpenModal}
          setMembership={setMembership}
          membership={membership}
        />
      )}
    </div>
  );
};

export default SignMembershipBox;

