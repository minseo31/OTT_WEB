// 멤버쉽 혜택 콘텐츠 박스 Props 타입
export type PerkBoxPropsType = {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  id: "1" | "2" | "3";
};

// 멤버쉽 혜택 콘텐츠 박스 미디어 Props 타입
export type PerkMediaPropsType = {
  videoURL?:
    | "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
    | "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v";
  imgURL:
    | "/image/home/tv.png"
    | "/image/home/device-apile.png"
    | "/image/home/mobile.gif";
  padding?: "p-2" | "px-10 py-3";
};

// 멤버쉽 컨테이너 배경 이미지 Props 타입
export type MembershipBgImgType = {
  imgURL:
    | "/image/home/home-memebership-bg1.jpg"
    | "/image/home/home-memebership-bg2.jpg"
    | "/image/home/home-memebership-bg3.jpg";
};

// 멤버쉽 컨테이너 Props 타입
export type MembershipContainerPropsType = {
  imgURL:
    | "/image/home/home-memebership-bg1.jpg"
    | "/image/home/home-memebership-bg2.jpg"
    | "/image/home/home-memebership-bg3.jpg";
  title1: "프리미엄(Premium)" | "스탠다드(Standard)" | "광고형스탠다드(AD)";
  title2: "4K+HDR" | "1080p";
  text1:
    | "의 가장 좋은 환경에서의"
    | "콘텐츠를 이용하기에 적절하며"
    | "의 멤버쉽 요금에 부담감 없이";
  text2:
    | "많은 기능과 콘텐츠를 사용할 수 있는 멤버쉽 입니다."
    | "광고가 없는 멤버쉽 입니다."
    | "적절한 콘텐츠를 즐기기에 좋은 멤버쉽 입니다.";
  price: "17,000원" | "13,500원" | "5,500원";
  quality: "가장 좋음" | "좋음";
  resolution: "4K(UHD) + HDR" | "1080p";
  sound: "포함" | "없음";
  devices1: "TV , 컴퓨터 , 스마트폰 , 태블릿";
  devices2: "6기종" | "2기종";
  members: "4명" | "2명";
  ad: "광고 없음" | "광고 포함";
  setSignMove: React.Dispatch<React.SetStateAction<boolean>>;
};

// 멤버쉽 콘텐츠 박스 Props타입
export type MembershipContentBoxPropsType = {
  title1: "프리미엄(Premium)" | "스탠다드(Standard)" | "광고형스탠다드(AD)";
  title2: "4K+HDR" | "1080p";
  text1:
    | "의 가장 좋은 환경에서의"
    | "콘텐츠를 이용하기에 적절하며"
    | "의 멤버쉽 요금에 부담감 없이";
  text2:
    | "많은 기능과 콘텐츠를 사용할 수 있는 멤버쉽 입니다."
    | "광고가 없는 멤버쉽 입니다."
    | "적절한 콘텐츠를 즐기기에 좋은 멤버쉽 입니다.";
  price: "17,000원" | "13,500원" | "5,500원";
  quality: "가장 좋음" | "좋음";
  resolution: "4K(UHD) + HDR" | "1080p";
  sound: "포함" | "없음";
  devices1: "TV , 컴퓨터 , 스마트폰 , 태블릿";
  devices2: "6기종" | "2기종";
  members: "4명" | "2명";
  ad: "광고 없음" | "광고 포함";
  setSignMove: React.Dispatch<React.SetStateAction<boolean>>;
};

// 멤버쉽 라벨 Props타입
export type MembershipLabelPropsType = {
  title1:
    | "프리미엄(Premium)"
    | "스탠다드(Standard)"
    | "광고형스탠다드(AD)"
    | undefined
    | string;
  title2: "4K+HDR" | "1080p" | string | undefined;
  width: "450px" | "350px";
  height: "150px" | "100px";
};

// 멤버쉽 설명 텍스트 박스 Props 타입
export type MembershipTextBox = {
  text1:
    | "의 가장 좋은 환경에서의"
    | "콘텐츠를 이용하기에 적절하며"
    | "의 멤버쉽 요금에 부담감 없이";
  text2:
    | "많은 기능과 콘텐츠를 사용할 수 있는 멤버쉽 입니다."
    | "광고가 없는 멤버쉽 입니다."
    | "적절한 콘텐츠를 즐기기에 좋은 멤버쉽 입니다.";
};

// 멤버쉽 상세정보 Props 타입
export type MemebershipInformationBoxPropsType = {
  price: "17,000원" | "13,500원" | "5,500원";
  quality: "가장 좋음" | "좋음";
  resolution: "4K(UHD) + HDR" | "1080p";
  sound: "포함" | "없음";
  devices1: "TV , 컴퓨터 , 스마트폰 , 태블릿";
  devices2: "6기종" | "2기종";
  members: "4명" | "2명";
  ad: "광고 없음" | "광고 포함";
};

// 홈페이지 props 타입
export type HomePagePropsType = {
  setSignMove: React.Dispatch<React.SetStateAction<boolean>>;
};
