
import { MainData } from "../data/MainData";
import { MemberDataType } from "../service/get/member";
import { MovieResponseType } from "../service/get/movie";
import { ageRatingImgStateType, GenreChoiceStateType } from "../state";

// 카테고리 컨테이너 Props 타입
export type MainCategoryPropsType = {
  title: string;
  setTeaserModal: React.Dispatch<React.SetStateAction<boolean>>;
  allData?: MainData[];
  setModalContent: React.Dispatch<React.SetStateAction<MainData>>;
  modalContent: MainData;
  loginMember?: MemberDataType[] | undefined;
  setClickMovie?: React.Dispatch<React.SetStateAction<any>>;
  setLoginMember: React.Dispatch<
    React.SetStateAction<MemberDataType[] | undefined>
  >;
  viewingHistory: MainData[];
  setViewingHistory: React.Dispatch<React.SetStateAction<MainData[]>>;
};

// 티저 모달 Props 타입
export type MainTeaserModalPropsType = {
  setTeaserModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalContent: React.Dispatch<React.SetStateAction<MainData>>;
  modalContent: MainData;
  allData?: MainData[];
  data?: MainData;
  setCategoryRef?: React.Dispatch<
    React.SetStateAction<React.RefObject<HTMLDivElement> | undefined>
  >;
  loginMember?: MemberDataType[] | undefined;
  loginData?: MemberDataType;
  setClickMovie?: React.Dispatch<React.SetStateAction<any>>;
  isWishlist?: boolean;
  isMember?: boolean;

  setWishState: React.Dispatch<React.SetStateAction<boolean>>;
  wishState: boolean;
  setWishMSGModal: React.Dispatch<
    React.SetStateAction<"opacity-0" | "opacity-100">
  >;
  isWish: boolean;
  setIsWish: React.Dispatch<React.SetStateAction<boolean>>;
  setViewingHistory: React.Dispatch<React.SetStateAction<MainData[]>>;
  teaserModal: boolean;
};

// 카테고리 Props 타입
export type MainCategorysPropsType = {
  setTeaserModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalContent: React.Dispatch<React.SetStateAction<MainData>>;
  modalContent: MainData;
  allData?: MainData[];
  data?: MainData;
  setCategoryRef?: React.Dispatch<
    React.SetStateAction<React.RefObject<HTMLDivElement> | undefined>
  >;
  loginMember?: MemberDataType[] | undefined;
  loginData?: MemberDataType;
  setClickMovie?: React.Dispatch<React.SetStateAction<any>>;
  isWishlist?: boolean;
  isMember?: boolean;

  setWishState: React.Dispatch<React.SetStateAction<boolean>>;
  wishState: boolean;
  title: string;
  setLoginMember: React.Dispatch<
    React.SetStateAction<MemberDataType[] | undefined>
  >;
  viewingHistory: MainData[];
  i?: number;
};

// 배너 Props 타입
export type MainBannerPropsType = {
  setBannerPosition: React.Dispatch<React.SetStateAction<number>>;
  bannerPosition: number;
};

// --------------------------------------------

// 검색 컨테이너 Props 타입
export type SearchContainerPropsType = {
  searchOpen: boolean;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  movieData: MovieResponseType | undefined;
  setTeaserModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalContent: React.Dispatch<React.SetStateAction<MainData>>;
  modalContent: MainData;
};

// 검색창 Props 타입
export type SearchImputPropsType = {
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

// 검색 콘텐츠 컨테이너 Props 타입
export type searchContentContainerPropsType = {
  filterData: MainData[] | undefined;
  setTeaserModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalContent: React.Dispatch<React.SetStateAction<MainData>>;
};

// 검색 리스트 박스 Props 타입
export type searchListBoxPropsType = {
  movie: MainData;
};

// -----------------------------------------

// 장르 컨테이너 Props 타입
export type GenreContainerPropsType = {
  setGenreOpen: React.Dispatch<React.SetStateAction<boolean>>;
  movieData: MovieResponseType | undefined;
  setTeaserModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalContent: React.Dispatch<React.SetStateAction<MainData>>;
  setLoginMember: React.Dispatch<
    React.SetStateAction<MemberDataType[] | undefined>
  >;
  viewingHistory: MainData[];
};

// 장르 리스트 헤더 Props 타입
export type GenreHeaderPropsType = {
  genreChoice: GenreChoiceStateType;
  setGenreChoice: React.Dispatch<React.SetStateAction<GenreChoiceStateType>>;
  setGenreFilterData: React.Dispatch<
    React.SetStateAction<MainData[] | undefined>
  >;
  movieData: MovieResponseType | undefined;
};

// ---------------------------------------------
// 시청 기록 삭제 모달 Props 타입
export type ViewHistoryDelModalPropsType = {
  setViewHistoryModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setViewingHistory: React.Dispatch<React.SetStateAction<MainData[]>>;
};
