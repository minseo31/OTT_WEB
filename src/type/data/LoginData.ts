// 로그인 데이터 타입
export type LoginDataType = {
  title: "로그인";
  ples: [
    { id: "login1"; ple: "이메일 주소를 입력하세요"; type: "text" },
    { id: "login2"; ple: "비밀번호를 입력하세요"; type: "password" }
  ];
  check_label: "로그인 정보 저장";
  btn_text: "로그인";
  error: [
    { id: "login_error1"; error1: "이메일 형식이 맞지 않습니다 (@)" },
    { id: "login_error1"; error2: "비밀번호가 일치하지 않습니다." }
  ];
  signup_text: "Nutflix 멤버가 아닌가요?";
  lobot_text: "이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.";
};

//  가입하기 1단계 데이터 타입
export type SignupData1Type = {
  level: "1/3단계";
  title: "가입하기";
  ples: [
    { id: "signup1_ple1"; ple: "이메일 주소를 입력하세요"; type: "text" },
    { id: "signup1_ple2"; ple: "비밀번호를 입력하세요"; type: "password" },
    { id: "signup1_ple3"; ple: "비밀번호를 다시 입력하세요"; type: "password" }
  ];
  check_label: [
    {
      id: "signup1_check1";
      label: "개인정보 처리방침에 따른 개인정보 수집 및 활용에 동의합니다. (필수 사항)";
    },
    {
      id: "signup1_check2";
      label: "예 넷플릭스 관련 홍보 및 마케팅 알림 이메일을 수신하겠습니다. (선택 사항)";
    }
  ];
  btn_text: "가입하기";
  error: [
    "이메일 형식에 맞지 않습니다!(@)",
    "비밀번호는 숫자, 영어, 특수문자(@, ?, !)를 포함해야합니다!",
    "비밀번호가 일치하지 않습니다!"
  ];
  check_error: "필수사항은 동의해야합니다!";
};

// 가입하기 2단계(멤버쉽 선택) 데이터 =
export type SignupData2Type = {
  level: "2/3단계";
  title: "멤버쉽 선택";
  btn_text: "선택하기";
  membership_data: [
    {
      id: "p_membership";
      name1: "프리미엄(Premium)";
      name2: "4K+HDR";
      info: "가장 좋은 환경에서의 많은 기능과 콘텐츠를 사용할 수 있는 멤버쉽입니다.";
      list_text: [
        { id: "pm1"; list: "월 요금 - 17,000원" },
        { id: "pm2"; list: "화질과 음질 - 가장좋음" },
        { id: "pm3"; list: "해상도 - 4K(UHD) + HDR" },
        { id: "pm4"; list: "공간 음향(이머시브 사운드) - 포함" },
        { id: "pm5"; list: "지원 디바이스 - TV, 컴퓨터, 스마트폰, 태블릿" },
        { id: "pm6"; list: "가구 구성원간 동시 접속자 수 - 4명" },
        { id: "pm7"; list: "저장 디바이스 - 6기종" },
        { id: "pm8"; list: "광고 - 광고없음" }
      ];
    },
    {
      id: "s_membership";
      name1: "스탠다드(Standard)";
      name2: "1080p";
      info: "콘텐츠를 이용하기에 적절하며 광고가 없는 멤버쉽 입니다.";
      list_text: [
        { id: "sm1"; list: "월 요금 - 13,500원" },
        { id: "sm2"; list: "화질과 음질 - 좋음" },
        { id: "sm3"; list: "해상도 - 1080p(Full HD)" },
        { id: "sm4"; list: "공간 음향(이머시브 사운드) - 없음" },
        { id: "sm5"; list: "지원 디바이스 - TV, 컴퓨터, 스마트폰, 태블릿" },
        { id: "sm6"; list: "가구 구성원간 동시 접속자 수 - 2명" },
        { id: "sm7"; list: "저장 디바이스 - 2기종" },
        { id: "sm8"; list: "광고 - 광고없음" }
      ];
    },
    {
      id: "a_membership";
      name1: "광고형 스탠다드(AD)";
      name2: "1080p";
      info: "멤버쉽 요금에 부담감 없이 적절한 콘텐츠를 즐기기에 좋은 멤버쉽입니다.";
      list_text: [
        { id: "am1"; list: "월 요금 - 5,500원" },
        { id: "am2"; list: "화질과 음질 - 좋음" },
        { id: "am3"; list: "해상도 - 1080p(Full HD)" },
        { id: "am4"; list: "공간 음향(이머시브 사운드) - 없음" },
        { id: "am5"; list: "지원 디바이스 - TV, 컴퓨터, 스마트폰, 태블릿" },
        { id: "am6"; list: "가구 구성원간 동시 접속자 수 - 2명" },
        { id: "am7"; list: "저장 디바이스 - 2기종" },
        { id: "am8"; list: "광고 - 광고있음" }
      ];
    }
  ];
};

// 가입하기 3단계(결제카드 등록하기) 데이터 타입
export type SignupData3Type = {
  level: "3/3단계";
  title: "결제 카드 등록하기";
  ples: [
    { id: "signup3_1"; ple: "카드번호를 입력하세요"; type: "text" },
    { id: "signup3_2"; ple: "유효 기간을 입력하세요"; type: "text" },
    { id: "signup3_3"; ple: "이름을 입력하세요"; type: "text" },
    {
      id: "signup3_4";
      ple: "카드 비밀번호 4자리를 입력하세요";
      type: "password";
    }
  ];
  check_label: "모든 이용약관을 동의합니다";
  bank_list: [
    { id: "bank1"; name: "신한" },
    { id: "bank2"; name: "국민" },
    { id: "bank3"; name: "하나" }
  ];
  btn_text: "등록하기";
};

// 가입완료 데이터
export type SignupCompleteDataType = {
  title: "가입완료";
  message: "이제 Netfliex의 미디어 콘텐츠를 제한없이 즐겨보세요!";
  btn_text: "로그인하기";
};
