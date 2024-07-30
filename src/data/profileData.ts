import { profileMemberAddModalDataType } from "../type/data/ProfileData";

// 멤버 추가하기 폼 데이터
export const profileMemberAddModalData: profileMemberAddModalDataType = {
  title: "멤버 등록하기",
  ples: [
    { id: "signup1_ple1", ple: "멤버 이름을 입력하세요", type: "text" },
    { id: "signup1_ple2", ple: "이메일을 입력하세요", type: "text" },
    {
      id: "signup1_ple3",
      ple: "비밀번호를 입력하세요",
      type: "password",
    },
  ],
  check_label: [
    {
      id: "signup1_check1",
      label:
        "개인정보 처리방침에 따른 개인정보 수집 및 활용에 동의합니다. (필수 사항)",
    },
    {
      id: "signup1_check2",
      label:
        "예 넷플릭스 관련 홍보 및 마케팅 알림 이메일을 수신하겠습니다. (선택 사항)",
    },
  ],
  btn_text: "멤버 등록하기",
  error: [
    { id: "signup1_error1", ple: "이름은 필수로 입력해야합니다", type: "text" },
    {
      id: "signup1_error2",
      ple: "이메일 형식에 맞지 않습니다!(@)",
      type: "text",
    },
    {
      id: "signup1_error3",
      ple: "비밀번호는 숫자, 영어, 특수문자(@, !, ?)를 포함해야합니다",
      type: "password",
    },
  ],
  check_error: "필수사항은 동의해야합니다!",
};
