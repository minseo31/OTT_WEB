import { MemberAddEventType } from "../../../type/util/memberAddErrorType";

// 멤버 추가 모달 유효성 , 무결성 검사
export const memberAddVali = (
  memberName: string,
  memberEmail: string,
  memberPw: string,
  check1: boolean
) => {
  // 입력값 무결성 에러
  const inputError: string[] = ["", "", ""];
  // 입력값 유효성 에러
  const inputErrorValidity: string[] = ["", "", ""];
  // 필수 체크박스 에러
  let checkError: string = "";

  // 무결성 검사
  if (!memberName) {
    // console.log("이름은 필수입력입니다!");
    inputError[0] = "이름은 필수입력입니다!";
  }

  if (!memberEmail) {
    // console.log("이메일은 필수입력입니다!");
    inputError[1] = "이메일은 필수입력입니다!";
  }

  if (!memberPw) {
    // console.log("비밀번호은 필수입력입니다!");
    inputError[2] = "비밀번호은 필수입력입니다!";
  }

  if (!check1) {
    // console.log("필수 체크란은 체크해야합니다!");
    checkError = "필수 체크란은 체크해야합니다!";
  }

  // 이메일 유효성 검사
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(memberEmail)) {
    // console.log("이메일 형식에 맞지 않습니다!");
    inputErrorValidity[1] = "이메일 형식에 맞지 않습니다!";
  }

  // 비밀번호 유효성 검사
  const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!?])[a-zA-Z\d@!?]+$/;
  if (!pwRegex.test(memberPw)) {
    // console.log("숫자, 영어, 특수문자(@, ! , ? 중 하나)를 포함해야합니다!");
    inputErrorValidity[2] =
      "숫자, 영어, 특수문자(@, ! , ? 중 하나)를 포함해야합니다!";
  }

  // 무결성, 유효성 검사 에러
  const validityErrors: MemberAddEventType[] = [
    { inputError: inputError },
    { inputErrorValidity: inputErrorValidity },
    { checkError: checkError },
  ];

  return validityErrors;
};

// 버튼 무결성, 유효성 검사
export const isDisable = (
  memberAddError: MemberAddEventType[] | undefined
): boolean[] => {
  const isDisable: boolean[] = [false, false, false];

  // memberAddError가 정의되어 있지 않으면 기본값 반환
  if (!memberAddError) {
    return isDisable;
  }

  // 에러 값 추출
  const inputError = memberAddError[0].inputError || [];
  const inputErrorValidity = memberAddError[1].inputErrorValidity || [];
  const checkError = memberAddError[2].checkError || "";

  // 각 배열과 값이 빈 문자열만 포함하고 있는지 확인
  isDisable[0] =
    Array.isArray(inputError) && inputError.every((error) => error === "");
  isDisable[1] =
    Array.isArray(inputErrorValidity) &&
    inputErrorValidity.every((error) => error === "");
  isDisable[2] = checkError === "";
  return isDisable;
};
