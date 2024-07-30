import { useState } from "react";
import { handelTeaserModalOpen } from "../../../event/main/teaserModalOpenEvent";
import { searchContentContainerStyle } from "../../../style/molecule/main/search";
import { searchContentContainerPropsType } from "../../../type/props/main";
import SearchListBox from "./SearchListBox";

// 검색 콘텐츠 컨테이너
const SearchContentContainer = ({
  filterData,
  setTeaserModal,
  setModalContent,
}: searchContentContainerPropsType) => {
  const [demo, setDemo] = useState<string>("");

  return (
    <div
      className={`${searchContentContainerStyle}`}
      style={{ scrollbarColor: "#E50914 black", scrollbarWidth: "thin" }}
    >
      {filterData?.map((movie) => (
        <div
          key={movie.movieId}
          // 티저 모달 등장 이벤트 핸들러
          onClick={() =>
            handelTeaserModalOpen(
              setTeaserModal,
              setModalContent,
              movie,
              setDemo
            )
          }
        >
          <SearchListBox movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default SearchContentContainer;
