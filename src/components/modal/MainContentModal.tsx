import { useEffect, useState } from "react";
import { handelTeaserModalOpen } from "../../event/main/teaserModalOpenEvent";
import { posterStyle } from "../../style/atom/poster";
import {
  mainContentModalStyle,
  mainContentMovieInfoBoxStyle,
  mainContentVideoStyle,
  mainCotentModalCloseTextStyle,
  noUiBorderStyle,
  uiBtnStyle,
  WishlistBtn1,
} from "../../style/modal/mainContentModal";
import { modalContainerStyle } from "../../style/modal/modal";
import { MainTeaserModalPropsType } from "../../type/props/main";
import Overlay from "../atom/bg/Overlay";
import SmallText from "../atom/text/SmallText";
import SubTitle from "../atom/text/SubTitle";
import BtnBox from "../molecule/BtnBox";
import { handelTeaserUiOpen } from "../../event/main/teaserUiOpenEvent";
import SubText from "../atom/text/SubText";
import { ageRatingImgStateType } from "../../type/state";
import { ageRatingData } from "../../data/mainDatas";
import { ageRatingVali } from "../../util/validation/main/ageVali";
import SmallBtn from "../atom/button/SmallBtn";
import { wishlistEvent } from "../../event/main/wishlistEvent";

// 메인 콘텐츠 모달
const MainContentModal = ({
  setTeaserModal,
  setModalContent,
  modalContent,
  loginMember,
  isWishlist,
  isMember,

  setWishState,
  wishState,
  setWishMSGModal,
  isWish,
  setIsWish,
  setViewingHistory,
  teaserModal,
}: MainTeaserModalPropsType) => {
  // ui 오픈 상태
  const [uiOpen, setUiOpen] = useState<boolean>(true);
  // 관람가 이미지 경로
  const [ageImg, setAgeImg] = useState<ageRatingImgStateType>(
    ageRatingData[0].img
  );

  const [demo, setDemo] = useState<string>("");

  useEffect(() => {}, [wishState]);

  // 찜목록에 존재하는 콘텐츠인지 확인
  useEffect(() => {
    if (loginMember && modalContent) {
      const wishContent = loginMember.filter((wishlist) => {
        return wishlist.movie_id === modalContent.movieId;
      });

      setIsWish(wishContent.length > 0);
    }
  }, [loginMember, modalContent, isWishlist]);

  useEffect(() => {
    if (modalContent.ageRating) {
      // 관람가 이미지 지정
      ageRatingVali(setAgeImg, modalContent.ageRating);
    }
  }, [modalContent.ageRating]);

  // 시청 기록 저장
  useEffect(() => {
    setViewingHistory((prev) => {
      const viewingHistory = [modalContent, ...prev];
      // 로컬 스토리지에 시청 기록 저장
      localStorage.setItem("ViewingHistory", JSON.stringify(viewingHistory));
      return viewingHistory;
    });
  }, [teaserModal]);

  return (
    <div className={`${modalContainerStyle}`}>
      {/* 오버레이 */}
      <div
        onClick={() =>
          handelTeaserModalOpen(
            setTeaserModal,
            setModalContent,
            {
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
            },
            setDemo
          )
        }
      >
        <Overlay />
      </div>
      {/* 모달 박스 */}
      <div className={`${mainContentModalStyle}`}>
        {/* 비디오 */}
        <iframe
          className={`${mainContentVideoStyle}`}
          src={modalContent.teaserUrl}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        {/* 소개 박스 */}
        {uiOpen && (
          <div className={`${mainContentMovieInfoBoxStyle}`}>
            <img
              src={modalContent.posterImage}
              alt={modalContent.movieTitle}
              className={`${posterStyle}`}
            />
            <SubTitle text={modalContent.movieTitle} align="text-start" />
            {/* 관람가 */}
            <BtnBox>
              <img
                className="w-[20px] h-[20px] object-cover"
                src={ageImg}
                alt={modalContent.movieTitle}
              />
              <SubText text={modalContent.ageRating} align="text-start" />
            </BtnBox>
            <BtnBox>
              <SubText text="장르 | " align="text-center" />
              <SmallText text={modalContent.genreNames} align="text-start" />
              <SubText
                text={`평점 | ${modalContent.movieRating} / 10점`}
                align="text-center"
              />
              <SubText
                text={`상영 시간 | ${modalContent.runtime}`}
                align="text-center"
              />
            </BtnBox>
            <SmallText text={modalContent.plotSummary} />
            <BtnBox>
              <SmallText
                text={`제작사 | ${modalContent.productionCompanyNames}`}
              />
              <SmallText text={`감독 | ${modalContent.directorNames}`} />
            </BtnBox>
          </div>
        )}
        {/* ui 숨김 아이콘 */}
        <div
          className={`${uiBtnStyle}`}
          onClick={() => handelTeaserUiOpen(setUiOpen)}
        >
          <SubTitle text="UI" align="text-center" />
          {!uiOpen && <div className={`${noUiBorderStyle}`}></div>}
        </div>
        {uiOpen && (
          <div
            className={`${WishlistBtn1}`}
            onClick={() =>
              wishlistEvent(
                isWish,
                setIsWish,
                modalContent.movieId,
                isMember,
                loginMember,
                setWishState,
                setWishMSGModal
              )
            }
          >
            <SmallBtn
              text={isWish ? "찜삭제" : "찜하기"}
              bgColor={isWish ? "bg-main_Red" : "bg-white"}
              textColor={isWish ? "white" : "#E50914"}
            />
          </div>
        )}
      </div>
      <span
        className={`${mainCotentModalCloseTextStyle}`}
        onClick={() =>
          handelTeaserModalOpen(
            setTeaserModal,
            setModalContent,
            {
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
            },
            setDemo
          )
        }
      >
        - 빈 곳을 클릭하여 닫기 -
      </span>
    </div>
  );
};

export default MainContentModal;
