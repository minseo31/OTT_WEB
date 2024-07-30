import {
  CheckBoxContainerStyle,
  CheckBoxImgStyle,
  CheckBoxStyle,
  CheckLabelContainerStyle,
} from "../../../style/atom/input";
import { CheckBoxPropsType } from "../../../type/props/atom";
import SmallText from "../text/SmallText";

// 체크 박스 컴포넌트 - isCheck는 체크 상태 입니다. (사용되는 컴포넌트마다 state를 관리해야 합니다.)
const CheckBox = ({ isCheck, label, onChange, onClick }: CheckBoxPropsType) => {
  return (
    <div className={`${CheckLabelContainerStyle}`}>
      <div className={CheckBoxContainerStyle}>
        <input
          onChange={onChange}
          type="checkbox"
          className={`${CheckBoxStyle}`}
        />

        {/* 체크 상태에 따라 조건부 렌더링 */}
        {isCheck ? (
          <img
            src="/image/logo/netflix-logo1.png"
            alt=""
            className={CheckBoxImgStyle}
          />
        ) : (
          <></>
        )}
      </div>
      <span className="cursor-pointer" onClick={onClick}>
        <SmallText text={label} />
      </span>
    </div>
  );
};

export default CheckBox;
