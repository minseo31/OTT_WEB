// children Props 타입
export type ChildrenPropsType = {
  children: JSX.Element[];
};

// 재사용 가능한 버튼 컴포넌트들의 props 타입
export type BtnPropsType = {
  text: string;
  // 배경색 : 레드 | 살짝 투명한 블랙
  bgColor: "bg-main_Red" | "bg-black1_07" | "bg-white" | "bg-black3";
  // 외곽선 : white
  border?: "border-soild border-white border-2";
  // 글자 색상
  textColor?: "white" | " black" | "#E50914" | "#333333";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

// 재사용 가능한 로고 이미지 props 타입
export type LogoPropsType = {
  // 홈 페이지 타이틀 | 폼  | 사이드 바 or 푸터 | 모달 | 본문
  width: "w-[400px]" | "w-[300px]" | "w-[200px]" | "w-[150px]" | "w-[80px]";
  height: "h-[200px]" | "h-[150px]" | "h-[100px]" | "h-[75px]" | "h-[40px]";
};

// 재사용 가능한 타이틀 Props 타입
export type TitlePropsType = {
  text:
    | string
    | "프리미엄(Premium)"
    | "스탠다드(Standard)"
    | "광고형 스탠다드(AD)"
    | undefined;
  align?: "text-center" | "text-start";
};

// 재사용 가능한 본문 Props 타입
export type TextPropsType = {
  text: string;
  // 텍스트 가운데 정렬 | 왼쪽 정렬
  align: "text-center" | "text-start";
};

// 재사용 가능한 포스터 Props 타입
export type PosterPropsType = {
  imgURL: string;
};

// 재사용 가능한 화살표 아이콘 Props 타입
export type ArrowiconPropsType = {
  // 왼쪽 방향 | 오른쪽 방향
  direction: "rotate-180" | "rotate-0";
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

// 재사용 가능한 하이퍼 텍스트 Props타입
export type PointtextPropsType = {
  text: string;
  url: string;
  size: string;
  align?: "text-center" | "text-start";
};

// 재사용 가능한 작은 글씨 Props 타입
export type SmallTextPropsType = {
  text: string;
  align?: "text-center" | "text-start";
};

// 재사용 가능한 체크 박스 Props 타입
export type CheckBoxPropsType = {
  isCheck: boolean;
  label: string;
  onChange: () => void;
  onClick?: () => void;
};

// 재사용 가능한 입력창 Props 타입
export type InputPropsType = {
  ple: string;
  // text타입 | password 타입
  isType: "text" | "password";
  isIcon: boolean;
  isError: boolean;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  email?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  localEmail: string;

  // input 순서 추적 state
  setInputIndex?: React.Dispatch<React.SetStateAction<number>>;
  i?: number;
  value?: string;
  isCheck?: boolean;
};
