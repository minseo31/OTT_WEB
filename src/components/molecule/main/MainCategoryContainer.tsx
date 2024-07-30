import { useState } from "react";
import {
  MainCategoryBoxStyle,
  MainCategoryContainerStyle,
  MainCategoryTitleStyle,
} from "../../../style/molecule/main/category";
import { MainCategoryPropsType } from "../../../type/props/main";
import Arrowicon from "../../icon/Arrowicon";
import BtnBox from "../BtnBox";
import MainCategoryPostBox from "./MainCategoryPostBox";
import { categotyScrollClickEvnet } from "../../../event/main/categoryScrollEvnet";
import SubText from "../../atom/text/SubText";
import ViewHistoryDelModal from "../../modal/ViewHistoryDelModal";

// 카테고리 콘텐츠 컨테이너
const MainCategoryContainer = ({
  title,
  setTeaserModal,
  allData,
  setModalContent,
  modalContent,
  loginMember,
  setClickMovie,
  setLoginMember,
  viewingHistory,
  setViewingHistory,
}: MainCategoryPropsType) => {
  // 하위 컴포넌트의 카테고리 컨테이너 ref 가져올 state
  const [categoryRef, setCategoryRef] =
    useState<React.RefObject<HTMLDivElement>>();
  // 시청 기록 삭제 모달
  const [viewHistoryModalOpen, setViewHistoryModalOpen] =
    useState<boolean>(false);

  const [demo, setDemo] = useState<boolean>(false);

  return (
    <div className={`${MainCategoryContainerStyle}`}>
      <div className={`${MainCategoryBoxStyle}`}>
        <span className={`${MainCategoryTitleStyle}`}>{title}</span>
        <BtnBox>
          <div
            className="cursor-pointer"
            onClick={() => {
              setViewHistoryModalOpen(true);
            }}
          >
            {/* 시청기록 컨테이너만 렌더링 */}
            {title === "시청기록" ? (
              <SubText text="시청기록 삭제" align="text-center" />
            ) : (
              <></>
            )}
          </div>
          {/* 왼쪽 스크롤 끝 이동 */}
          <div onClick={() => categotyScrollClickEvnet(categoryRef, false)}>
            <Arrowicon direction="rotate-180" />
          </div>
          {/* 오른쪽 스크롤 끝 이동 */}
          <div onClick={() => categotyScrollClickEvnet(categoryRef, true)}>
            <Arrowicon direction="rotate-0" />
          </div>
        </BtnBox>
      </div>
      {/* 포스터 박스 */}
      <MainCategoryPostBox
        setTeaserModal={setTeaserModal}
        allData={allData}
        setModalContent={setModalContent}
        modalContent={modalContent}
        setCategoryRef={setCategoryRef}
        loginMember={loginMember}
        setClickMovie={setClickMovie}
        setWishState={setDemo}
        wishState={demo}
        title={title}
        setLoginMember={setLoginMember}
        viewingHistory={viewingHistory}
      />
      {viewHistoryModalOpen && (
        <ViewHistoryDelModal
          setViewHistoryModalOpen={setViewHistoryModalOpen}
          setViewingHistory={setViewingHistory}
        />
      )}
    </div>
  );
};
export default MainCategoryContainer;
