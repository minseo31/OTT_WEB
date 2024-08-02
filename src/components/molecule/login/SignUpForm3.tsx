import { useEffect, useState } from "react";
import { signupData1, signupData3 } from "../../../data/loginDatas";
import { handleSignLevel } from "../../../event/login/signLevelEvent";
import { signupFormStyle } from "../../../style/molecule/login/container";
import { SignLevelState } from "../../../type/state";
import FormBtn from "../../atom/button/FormBtn";
import CheckBox from "../../atom/input/CheckBox";
import Input from "../../atom/input/Input";
import Fulllogo from "../../atom/logo/Fulllogo";
import MainTitle from "../../atom/text/MainTitle";
import SmallText from "../../atom/text/SmallText";
import Dropdown from "../Dropdown";
import {
  validateCardNum,
  validateCardPw,
  validateExpirationPeriod,
  validateName,
} from "../../../util/validation/loginValidation";
import SmallTextRed from "../../atom/text/SmallTextRed";
import { fetchUserAdd } from "../../../service/post/signupService";
import { UserAddDataType } from "../../../type/service/post/signup";
import FooterModalContainer from "../footer/footerModalContainer/FooterModalContainer";
import SignUp3VailModal from "../../modal/SignUp3VailModal";

// 가입하기 3단계 (결제 등록)
const SignUpForm3 = ({
  setSignLevel,
  signUpData,
  setSignUpData,
}: SignLevelState) => {
  //카드번호, 유효기간, 이름, 카드비밀번호 상태 및 유효성 검사
  const [email, setEmail] = useState<string>("");
  const [emailValid, setEmailValid] = useState<boolean>(true);

  const [cardNum, setCardNum] = useState<string>("");
  const [cardNumValid, setCardNumValid] = useState<boolean>(false);

  const [expirationPeriod, setExpirationPeriod] = useState<string>("");
  const [expirationPeriodValid, setExpirationPeriodValid] =
    useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [nameValid, setNameValid] = useState<boolean>(false);

  const [cardPw, setCardPw] = useState<string>("");
  const [cardPwValid, setCardPwValid] = useState<boolean>(false);

  // const [pwMatch, setPwMatch] = useState<boolean>(true);

  // 이용약관 모달 오픈
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  // 유효성 검사 실패 모달
  const [vailModal, setVailModal] = useState<boolean>(false);
  // 유효성 검사 실패 메세지
  const [vailMSG, setVailMSG] = useState<string>("");
  
  const [dropdownSelection, setDropdownSelection] = useState<string | null>(null);


  // 회원가입 정보 멤버쉽 데이터 저장
  useEffect(() => {
    // 데이터 저장
    setSignUpData((prev) => {
      return {
        name: prev.name,
        email: prev.email,
        password: prev.password,
        card_name: name,
        card_number: cardNum,
        amount: prev.amount,
        expiry_date: expirationPeriod,
      };
    });
  }, [name, cardNum, expirationPeriod]);

  // onChange 함수 호출
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "cardNum") {
      setCardNum(value);
      setCardNumValid(validateCardNum(value));
    } else if (name === "expirationPeriod") {
      setExpirationPeriod(value);
      setExpirationPeriodValid(validateExpirationPeriod(value));
    } else if (name === "name") {
      setName(value);
      setNameValid(validateName(value));
      setSignUpData((prev) => ({ ...prev, name: value }));
    } else if (name === "cardPw") {
      setCardPw(value);
      setCardPwValid(validateCardPw(value));
    }
  };

  const [submitData, setSubmitData] = useState<UserAddDataType | undefined>(
    undefined
  );

  // 비동기로 회원가입 데이터 정보가 있을 떄 서버 요청
  useEffect(() => {
    if (submitData) {
      fetchUserAdd(submitData);
    }
  }, [submitData]);

  // 최종 유효성 검사 및 가입 처리
  const handleSubmit = async (signUpData: UserAddDataType | undefined) => {
    if (
      cardNumValid &&
      expirationPeriodValid &&
      nameValid &&
      cardPwValid &&
      isCheck
    ) {
      handleSignLevel(setSignLevel, 4);
      // 비동기 서버요청 값을 변경
      if (signUpData) {
        setSubmitData(signUpData);
      }
    } else {
      setVailModal(true);
      setVailMSG("공란없이 모두 기입 및 필수체크란을 체크하셔야합니다!");
    }
  };

  const [isCheck, setIsCheck] = useState(false);

  return (
    <div className={`${signupFormStyle}`}>
      <Fulllogo width="w-[300px]" height="h-[150px]" />
      <SmallText text={signupData3.level} />
      <MainTitle text={signupData3.title} />
      {/* 카드번호 입력창 */}
      <div>
        {cardNumValid ? null : (
          <SmallTextRed
            text="카드번호 형식이 올바르지 않습니다. (-를 제외하여 입력하세요)"
            align="text-center"
          />
        )}
        <Input
          ple={signupData3.ples[0].ple}
          isType="text"
          isIcon={false}
          setEmail={setCardNum}
          email={cardNum}
          isError={!setCardNumValid}
          name="cardNum"
          onChange={handleInputChange}
          localEmail=""
        />
      </div>

      {/* 유효기간 입력창 */}
      <div>
        {expirationPeriodValid ? null : (
          <SmallTextRed
            text="유효기간이 올바르지 않습니다. ex) 01/01"
            align="text-center"
          />
        )}
        <Input
          ple={signupData3.ples[1].ple}
          isType="text"
          isIcon={false}
          setEmail={setExpirationPeriod}
          email={expirationPeriod}
          isError={!setExpirationPeriodValid}
          name="expirationPeriod"
          onChange={handleInputChange}
          localEmail=""
        />
      </div>

      {/* 이름 입력창 */}
      <div>
        {nameValid ? null : (
          <SmallTextRed text="이름이 올바르지 않습니다." align="text-center" />
        )}
        <Input
          ple={signupData3.ples[2].ple}
          isType="text"
          isIcon={false}
          setEmail={setName}
          email={name}
          isError={!nameValid}
          name="name"
          onChange={handleInputChange}
          localEmail=""
        />
      </div>

      {/* 카드 비밀번호 입력창 */}
      <div>
        {emailValid ? null : (
          <SmallTextRed
            text="카드 비밀번호가 올바르지 않습니다."
            align="text-center"
          />
        )}
        <Input
          ple={signupData3.ples[3].ple}
          isType="password"
          isIcon={false}
          setEmail={setCardPw}
          email={cardPw}
          isError={!cardPwValid}
          name="cardPw"
          onChange={handleInputChange}
          localEmail=""
        />
      </div>

      {/* 체크박스 */}
      <div className="flex gap-3 items-center">
        <CheckBox
          isCheck={isCheck}
          onChange={() => setIsCheck(!isCheck)}
          label={signupData3.check_label}
          onClick={() => setModalOpen((prev) => !prev)}
        />
        <Dropdown onChange={(selection) => setDropdownSelection(selection)} />
      </div>
      {/* 가입하기 버튼 */}
      <div onClick={() => handleSubmit(signUpData)}>
        <FormBtn text={signupData1.btn_text} bgColor="bg-main_Red" />
      </div>
      {/* 이용약관 모달 */}
      {modalOpen && (
        <FooterModalContainer
          setPolicyModal={setModalOpen}
          isModal="이용약관"
        />
      )}
      {/* 유효성 검사 실패 모달 */}
      {vailModal && (
        <SignUp3VailModal msg={vailMSG} setVailModal={setVailModal} />
      )}
    </div>
  );
};

export default SignUpForm3;
