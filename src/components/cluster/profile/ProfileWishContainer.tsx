import { useEffect, useState } from "react";
import { profileSection3Container } from "../../../style/cluster/profile/section";
import MainCategoryContainer from "../../molecule/main/MainCategoryContainer";
import { MainData } from "../../../type/data/MainData";
import { ProfileWishContainerPropsType } from "../../../type/props/propfile";
import MainContentModal from "../../modal/MainContentModal";
import WishModal from "../../modal/WishModal";
import SubText from "../../atom/text/SubText";

// 프로필 위시 리스트(찜하기) 컨테이넌
const ProfileWishContainer = ({
  loginMember,
  isMember,
  setWishState,
  wishState,
  setWishMSGModal,
  wishMSGModal,
  isWish,
  setIsWish,
  setViewingHistory,
  title,
  setLoginMember,
  viewingHistory,
  setMemberData,
  memberData,
}: ProfileWishContainerPropsType) => {
  const [teaserModal, setTeaserModal] = useState<boolean>(false);
  // 티저 모달 콘텐츠 추적
  const [modalContent, setModalContent] = useState<MainData>({
    movieId: 0,
    movieTitle: "",
    releaseDate: "",
    genreNames: "",
    categoryNames: "신규 콘텐츠",
    ageRating: "전체 관람가",
    runtime: "",
    movieRating: "",
    teaserUrl: "",
    posterImage: "",
    plotSummary: "",
    productionCompanyNames: "",
    directorNames: "",
  });

  // 찜 목록에서 선택한 영화를 제목으로 추적
  const [clickMovie, setClickMovie] = useState<MainData>();

  useEffect(() => {
    if (clickMovie) {
      setModalContent({
        movieId: clickMovie.movieId,
        movieTitle: clickMovie.movieTitle,
        releaseDate: clickMovie.releaseDate,
        genreNames: clickMovie.genreNames,
        categoryNames: clickMovie.categoryNames,
        ageRating: clickMovie.ageRating,
        runtime: clickMovie.runtime,
        movieRating: clickMovie.movieRating,
        teaserUrl: clickMovie.teaserUrl,
        posterImage: clickMovie.posterImage,
        plotSummary: clickMovie.plotSummary,
        productionCompanyNames: clickMovie.productionCompanyNames,
        directorNames: clickMovie.directorNames,
      });
    }
  }, [clickMovie]);

  return (
    <section className={`${profileSection3Container}`}>
      <MainCategoryContainer
        title={title}
        setTeaserModal={setTeaserModal}
        setModalContent={setModalContent}
        modalContent={modalContent}
        loginMember={loginMember}
        setClickMovie={setClickMovie}
        setLoginMember={setLoginMember}
        viewingHistory={viewingHistory}
        setViewingHistory={setViewingHistory}
      />
      {teaserModal && (
        <MainContentModal
          modalContent={modalContent}
          setModalContent={setModalContent}
          setTeaserModal={setTeaserModal}
          setClickMovie={setClickMovie}
          loginMember={loginMember}
          isWishlist={false}
          isMember={isMember}
          setWishState={setWishState}
          wishState={wishState}
          setWishMSGModal={setWishMSGModal}
          isWish={isWish}
          setIsWish={setIsWish}
          setViewingHistory={setViewingHistory}
          teaserModal={teaserModal}
          setMemberData={setMemberData}
          memberData={memberData}
        />
      )}
      {teaserModal && (
        <WishModal message={isWish ? "삭제" : "추가"} opacity={wishMSGModal} />
      )}
    </section>
  );
};

export default ProfileWishContainer;
