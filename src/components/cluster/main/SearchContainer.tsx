import { useEffect, useState } from "react";
import {
  searchContainerStyle,
  searchHeaderStyle,
} from "../../../style/molecule/main/search";
import { SearchContainerPropsType } from "../../../type/props/main";
import { searchFilter } from "../../../util/validation/main/searchFilter";
import MainInput from "../../atom/main/MainInput";
import SearchContentContainer from "../../molecule/main/SearchContentContainer";
import Arrowicon from "../../icon/Arrowicon";
import { searchInputFocusEvent } from "../../../event/main/searchEvnet";
import { ageRatingImgStateType } from "../../../type/state";
import { ageRatingData } from "../../../data/mainDatas";
import { ageRatingVali } from "../../../util/validation/main/ageVali";
import ModalBtn from '../../atom/button/ModalBtn';

// 검색 컨테이너
const SearchContainer = ({
  searchOpen,
  setSearchOpen,
  movieData,
  setTeaserModal,
  setModalContent,
  modalContent,
}: SearchContainerPropsType) => {
  // 사용자의 검색어
  const [inputValue, setInputValue] = useState<string>("");

  // 검색 값에 따른 영화 데이터 필터링하기
  const filterData = searchFilter(movieData, inputValue);

  return (
    <div className={`${searchContainerStyle}`}>
      {/* 검색창 헤더 */}
      <div className={`${searchOpen && searchHeaderStyle}`}>
        {searchOpen && <div />}
        <MainInput
          setSearchOpen={setSearchOpen}
          setInputValue={setInputValue}
        />
        {/* 검색 콘텐츠 창 오픈 시 뒤로가기 버튼 렌더링 */}
        {searchOpen && (
          <div onClick={() => searchInputFocusEvent(setSearchOpen, true)}>
              <ModalBtn
                bgColor="bg-main_Red"
                border="border-soild border-white border-2"
                text="닫기"
                textColor="white"
            />
          </div>
        )}
      </div>
      {/* 검색창이 포커싱 되었을 떄 렌더링 */}
      {searchOpen && (
        <SearchContentContainer
          filterData={filterData}
          setTeaserModal={setTeaserModal}
          setModalContent={setModalContent}
        />
      )}
    </div>
  );
};

export default SearchContainer;
