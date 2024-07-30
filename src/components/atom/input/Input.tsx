import { useEffect, useState } from "react";
import {
  InputContainerStyle,
  InputErrorStyle,
  InputNoErrorStyle,
  InputStyle,
} from "../../../style/atom/input";
import { InputPropsType } from "../../../type/props/atom";
import Hiddenicon from "../../icon/Hiddenicon";
import NoHiddenicon from "../../icon/NoHiddenicon";

// 입력창 컴포넌트 - ple는 placeholder , isType은 input의 타입 , isIcon은 입력값의 보임 아이콘 상태, isError 유효성 검사 여부
const Input = ({
  ple,
  isType,
  isIcon,
  isError,
  setEmail,
  email,
  onChange,
  name,
  localEmail,
  setInputIndex,
  i,
  value,
  isCheck,
}: InputPropsType) => {
  // 비밀번호 보기 상태를 관리하는 상태 변수
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // localEmail을 초기값으로 설정
  const [localEmailState, setLocalEmailState] = useState<string>("");

  // localEmail이 변경될 때 localEmailState를 업데이트
  useEffect(() => {
    isCheck ? setLocalEmailState(localEmail) : setLocalEmailState("");
  }, [localEmail]);

  // 아이콘 클릭 시 호출되는 핸들러
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={InputContainerStyle}>
      {/* 에러 상태 여부에 따라 외곽선 색상 변경 */}
      <input
        name={name}
        onChange={(event) => {
          if (onChange) {
            onChange(event); // onChange를 호출하고 이벤트를 전달
          }
          const value = event.target.value;
          setEmail(value);
          setLocalEmailState(value); // 상태 업데이트
          // input 추적
          if (setInputIndex !== undefined && i !== undefined) {
            setInputIndex(i);
          }
        }}
        type={isPasswordVisible && isType === "password" ? "text" : isType}
        placeholder={ple}
        className={`${
          isError ? InputErrorStyle : InputNoErrorStyle
        } ${InputStyle}`}
        value={isCheck && value ? value : localEmailState}
      />
      {/* Input 타입이 password라면 아이콘을 렌더링 */}
      {isType === "password" && (
        <span onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
          {isPasswordVisible ? <NoHiddenicon /> : <Hiddenicon />}
        </span>
      )}
    </div>
  );
};

export default Input;
