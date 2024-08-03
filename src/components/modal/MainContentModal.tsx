import { useEffect, useState, useCallback } from "react";
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
import { subTitleStyle } from "../../style/atom/text";
import { wishlistEvent } from "../../event/main/wishlistEvent";

const MainContentModal = ({
  setTeaserModal,
  setModalContent,
  modalContent,
  loginMember,
  isMember,
  setWishState,
  setWishMSGModal,
  setViewingHistory,
  teaserModal,
  setMemberData,
  memberData,
  setIsWish
}: MainTeaserModalPropsType) => {
  const [uiOpen, setUiOpen] = useState<boolean>(true);
  const [ageImg, setAgeImg] = useState<ageRatingImgStateType>(
    ageRatingData[0].img
  );
  const [isWishs, setIsWishs] = useState<boolean>(false);

  useEffect(() => {
    isWishs ? setIsWish(false) : setIsWish(true);
  }, [isWishs])

  // 모달 열릴 때 찜 상태 업데이트
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const isInWishlist = wishlist.some(
      (item: any) => item.movieId === modalContent.movieId
    );
    setIsWishs(isInWishlist);
  }, [modalContent]);

  useEffect(() => {
    if (modalContent.ageRating) {
      ageRatingVali(setAgeImg, modalContent.ageRating);
    }
  }, [modalContent.ageRating]);

  useEffect(() => {
    setViewingHistory((prev) => {
      const viewingHistory = [modalContent, ...prev];
      localStorage.setItem("ViewingHistory", JSON.stringify(viewingHistory));
      return viewingHistory;
    });
  }, [teaserModal]);

  const handleWishlistClick = useCallback(() => {
    wishlistEvent(
      isWishs,
      setIsWishs,
      modalContent.movieId,
      isMember,
      loginMember,
      setWishState,
      setWishMSGModal
    );

    // 로컬 스토리지 업데이트
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    if (isWishs) {
      const updatedWishlist = wishlist.filter(
        (item: any) => item.movieId !== modalContent.movieId
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } else {
      const updatedWishlist = [
        ...wishlist,
        { movieId: modalContent.movieId, movieTitle: modalContent.movieTitle },
      ];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  }, [
    isWishs,
    modalContent.movieId,
    modalContent.movieTitle,
    isMember,
    loginMember,
    setIsWishs,
    setWishState,
    setWishMSGModal,
  ]);

  useEffect(() => {
    const syncWishlist = async () => {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

      if (isMember) {
        for (const item of wishlist) {
          await wishlistEvent(
            false,
            () => {}, // setIsWish는 필요 없지만 사용
            item.movieId,
            isMember,
            loginMember,
            () => {}, // setWishState는 필요 없지만 사용
            () => {} // setWishMSGModal은 필요 없지만 사용
          );
        }
      }
    };

    window.addEventListener("beforeunload", syncWishlist);

    return () => {
      window.removeEventListener("beforeunload", syncWishlist);
    };
  }, [isMember, loginMember]);

  return (
    <div className={`${modalContainerStyle}`}>
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
            () => {}
          )
        }
      >
        <Overlay />
      </div>
      <div className={`${mainContentModalStyle}`}>
        <iframe
          className={`${mainContentVideoStyle}`}
          src={modalContent.teaserUrl}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        {uiOpen && (
          <div className={`${mainContentMovieInfoBoxStyle}`}>
            <img
              src={modalContent.posterImage}
              alt={modalContent.movieTitle}
              className={`${posterStyle}`}
            />
            <SubTitle text={modalContent.movieTitle} align="text-start" />
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
        <div
          className={`${uiBtnStyle}`}
          onClick={() => handelTeaserUiOpen(setUiOpen)}
        >
          <button className={`${subTitleStyle}`}>UI</button>
          {!uiOpen && <div className={`${noUiBorderStyle}`}></div>}
        </div>
        {uiOpen && (
          <div className={`${WishlistBtn1}`} onClick={handleWishlistClick}>
            <SmallBtn
              text={isWishs ? "찜삭제" : "찜하기"}
              bgColor={isWishs ? "bg-main_Red" : "bg-white"}
              textColor={isWishs ? "white" : "#E50914"}
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
            () => {}
          )
        }
      >
        - 빈 곳을 클릭하여 닫기 -
      </span>
    </div>
  );
};

export default MainContentModal;

