import { useEffect, useState } from "react";
import { handelTeaserModalOpen } from "../../../event/main/teaserModalOpenEvent";
import {
  mainCategoryPostStyle,
  postImgStyle,
} from "../../../style/molecule/main/category";
import { MainCategorysPropsType } from "../../../type/props/main";
import SubText from "../../atom/text/SubText";
import { MainData } from "../../../type/data/MainData";
import ModalBtn from "../../atom/button/ModalBtn";
import { MemberDataType } from "../../../type/service/get/member";

// 카테고리 포스터
const MainCategoryPost = ({
  setTeaserModal,
  data,
  setModalContent,
  loginData,
  setClickMovie,
  title,
  i,
}: MainCategorysPropsType) => {
  const [wishData, setWishData] = useState<MainData>({
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
  const [demo, setDemo] = useState<any>();

  const [viewData, setViewData] = useState<MemberDataType[]>();

  const handleRemove = () => {
    const remove = viewData?.filter((view: any, index) => {
      return i !== index;
    });

    localStorage.setItem("ViewingHistory", JSON.stringify(remove));
    window.location.reload();
  };

  useEffect(() => {
    const viewHistory = localStorage.getItem("ViewingHistory");
    const history = viewHistory && JSON.parse(viewHistory);

    setViewData(history);
  }, [loginData, demo]);

  useEffect(() => {
    loginData &&
      setWishData({
        movieId: loginData.movie_id,
        movieTitle: loginData.title,
        releaseDate: loginData.release_date,
        genreNames: loginData.genres,
        categoryNames: loginData.categories,
        ageRating: loginData.age_rating,
        runtime: loginData.runtime,
        movieRating: loginData.rating,
        teaserUrl: loginData.teaser_url,
        posterImage: loginData.poster_img,
        plotSummary: loginData.plot_summary,
        productionCompanyNames: loginData.production_companies,
        directorNames: loginData.directors,
      });
  }, [loginData, demo]);

  if (loginData && setClickMovie) {
    return (
      <div
        className={`${title ? "hover" : mainCategoryPostStyle}`}
        onClick={() =>
          handelTeaserModalOpen(
            setTeaserModal,
            setModalContent,
            wishData,
            setClickMovie
          )
        }
      >
        <img
          src={loginData.poster_img}
          alt={loginData?.title}
          className={`${postImgStyle}`}
        />
        <div className="hoverOver"></div>
        <div
          className="hoverBtn"
          onClick={(e) => {
            e.stopPropagation();
            setDemo(" ");
            handleRemove();
          }}
        >
          <ModalBtn bgColor="bg-main_Red" text="삭제하기" />
        </div>
        <SubText text={loginData.title} align="text-center" />
      </div>
    );
  }

  if (data && setDemo) {
    return (
      <div
        className={`${mainCategoryPostStyle}`}
        onClick={() =>
          handelTeaserModalOpen(setTeaserModal, setModalContent, data, setDemo)
        }
      >
        <img
          src={data?.posterImage}
          alt={data?.movieTitle}
          className={`${postImgStyle}`}
        />
        <SubText text={data.movieTitle} align="text-center" />
      </div>
    );
  }

  return <></>;
};

export default MainCategoryPost;

