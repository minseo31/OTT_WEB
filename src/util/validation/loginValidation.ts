import { Dispatch, SetStateAction } from "react";

// 이메일 유효성 검사 함수
export const validateEmail = (value: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(value);
};

// 패스워드 유효성 검사 함수
export const validatePassword = (value: string): boolean => {
  // 최소 8자리, 숫자, 영문자, 특수문자 모두 포함하는 정규식
  const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/;
  return regex.test(value);
};

// 입력값 변경 시 처리 함수
export const onChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setEmail: Dispatch<SetStateAction<string>>,
  setPw: Dispatch<SetStateAction<string>>,
  setEmailValid: Dispatch<SetStateAction<boolean>>
): void => {
  const { value, name } = event.target;

  if (name === "email") {
    setEmail(value);
    setEmailValid(validateEmail(value)); // 이메일 유효성 검사 결과 업데이트
  } else if (name === "pw") {
    setPw(value);
  }
};

//로그인 3단계 카드 등록 페이지 유효성 검사 함수
// 카드번호: 16자리 숫자 확인
export const validateCardNum = (value: string) => /^[0-9]{16}$/.test(value);
// 유효기간: MM/YY 형식 확인
export const validateExpirationPeriod = (value: string) =>
  /^(0[1-9]|1[0-2])\/\d{2}$/.test(value);
// 이름 유효성 검사
export const validateName = (value: string) => {
  // 입력 값에서 공백 제거 후 유효성 검사
  const trimmedValue = value.trim();

  // 한글 또는 영문자로만 구성되며 1자 이상 10자 이하인지 검사하는 정규 표현식
  const regex = /^[가-힣a-zA-Z]{1,10}$/;

  // 빈 문자열이 아니고, 정규 표현식에 맞는지 검사
  return trimmedValue !== '' && regex.test(trimmedValue);
};
// 카드 비밀번호: 4자리 숫자 확인
export const validateCardPw = (value: string) => /^[0-9]{4}$/.test(value);
