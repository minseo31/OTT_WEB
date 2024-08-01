import { useEffect, useState } from "react";
import {
  viewingHistoryContentBoxStyle,
  viewingHistoryPostStyle,
} from "../../../style/cluster/SideBar";
import { MainData } from "../../../type/data/MainData";
import { viewingHistoryContainerPropsType } from "../../../type/props/sidebar";
import SmallText from "../../atom/text/SmallText";
import MainContentModal from "../../modal/MainContentModal";
import WishModal from "../../modal/WishModal";
import MainText from "../../atom/text/MainText";

// 사이드 바 시청기록
const ViewingHistory = ({
  viewingHistory,
  isWish,
  setIsWish,
  setViewingHistory,
  setWishMSGModal,
  setWishState,
  wishState,
  wishMSGModal,
  isOpen,
}: viewingHistoryContainerPropsType) => {
  // 티저 모달 오픈 상태
  const [teaserModal, setTeaserModal] = useState<boolean>(false);
  // 시청 기록 클릭 식별 번호
  const [viewNum, setViewNum] = useState<number>(0);

  // 티저 모달 콘텐츠
  const [modalContent, setModalContent] = useState<MainData>(
    viewingHistory[viewNum]
  );

  // 스크롤바 등장
  const [scrollOpen, setScrollOpen] = useState<boolean>(false);

  useEffect(() => {
    setModalContent(viewingHistory[viewNum]);
  }, [viewNum, viewingHistory]);

  return (
    <div
      className={`${viewingHistoryContentBoxStyle} ${
        scrollOpen ? "overflow-y-auto" : "overflow-y-hidden pr-3"
      }`}
      style={{ scrollbarColor: "#E50914 transparent", scrollbarWidth: "thin" }}
      onMouseEnter={() => setScrollOpen(true)}
      onMouseLeave={() => setScrollOpen(false)}
    >
      {viewingHistory.map((history: MainData, i: number) => (
        <div
          className="w-full h-fit flex flex-col gap-1 border-b-[1px] border-[#E50914] pb-2"
          onClick={() => {
            setViewNum(i);
            setTeaserModal(true);
          }}
          key={String(history.movieId) + i}
        >
          <img
            src={history.posterImage}
            alt={history.movieTitle}
            className={`${viewingHistoryPostStyle}`}
          />
          <div className="w-full h-fit">
            {isOpen ? (
              <MainText text={history.movieTitle} align="text-center" />
            ) : (
              <SmallText text={history.movieTitle} align="text-center" />
            )}
          </div>
        </div>
      ))}
      {/* 티저 모달 */}
      {teaserModal && (
        <MainContentModal
          setTeaserModal={setTeaserModal}
          setModalContent={setModalContent}
          modalContent={modalContent}
          setWishState={setWishState}
          wishState={wishState}
          setWishMSGModal={setWishMSGModal}
          isWish={isWish}
          setIsWish={setIsWish}
          setViewingHistory={setViewingHistory}
          teaserModal={teaserModal}
        />
      )}
      {/* 찜 추가, 삭제 메세지 모달  */}
      {teaserModal && (
        <WishModal message={isWish ? "추가" : "삭제"} opacity={wishMSGModal} />
      )}
    </div>
  );
};

export default ViewingHistory;
