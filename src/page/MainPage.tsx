import { useEffect, useState } from "react";
import SideBar from "../components/cluster/SideBar";
import SearchContainer from "../components/cluster/main/SearchContainer";
import MainBannerContainer from "../components/molecule/main/MainBannerContainer";
import MainCategoryContainer from "../components/molecule/main/MainCategoryContainer";
import { mainPageStyle } from "../style/cluster/main/mainPage";
import { SideBarPropsType } from "../type/props/propfile";
import { mainData } from "../data/mainDatas";
import MainContentModal from "../components/modal/MainContentModal";
import { MainData } from "../type/data/MainData";
import MainGenreContainer from "../components/molecule/main/MainGenreContainer";
import { categoryDataFilter } from "../util/validation/main/categoryFilterData";
import { scrollDisable } from "../util/validation/main/scrollDisable";
import WishModal from "../components/modal/WishModal";
import { MovieResponseType } from "../type/service/get/movie";
import { fetchMovies } from "../service/get/movieAllService";

const MainPage = ({
  isPage,
  setIsPage,
  setIsLogin,
  setUserEmail,
  setUserPW,
  loginMember,
  setLoginMember,
  isLogin,
  setIsMeber,
  isMember,
  setWishState,
  wishState,
  wishMSGModal,
  setWishMSGModal,
  isWish,
  setIsWish,
  setViewingHistory,
  viewingHistory,
  setMemberData,
  memberData,
}: SideBarPropsType) => {
  // 영화 데이터 요청
  // const { data: movieData, error: movieError } = useSWR<MovieResponseType>(
  //   isLogin ? "https://ott-ss.azurewebsites.net/movie/all" : null,
  //   fetchMovies
  // );

  const [movieData, setMovieData] = useState<MovieResponseType>();

  useEffect(() => {
    // 멤버 데이터 서버 요청
    const fetchMemberData = async () => {
      try {
        const data = await fetchMovies();
        setMovieData(data);
      } catch (error) {
        console.error("콘텐츠 정보를 불러오기에 실패하였습니다 : ", error);
      }
    };

    fetchMemberData();
  }, [isPage, isLogin, isMember, wishState]);

  // 배너 이미지 넘기기 상태값
  const [bannerPosition, setBannerPosition] = useState<number>(0);

  // 티저 모달 오픈 상태
  const [teaserModal, setTeaserModal] = useState<boolean>(false);
  // 티저 모달 콘텐츠 추적
  const [modalContent, setModalContent] = useState<any>({});

  // 카테고리별 데이터
  const [categoryData, setCategoryData] = useState<JSX.Element[]>([]);

  // 검색 컨테이너 오픈 상태
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  // 장르별 컨테이너 오픈 상태
  const [genreOpen, setGenreOpen] = useState<boolean>(false);

  // 티저 모달 오픈 시 스크롤 제한
  scrollDisable(teaserModal);

  // 사이드 바 초기화
  useEffect(() => {
    if (isPage === "s2" || isPage === "s3") {
      setIsPage("s1");
    }
  }, []);

  // 카테고리별 데이터 분리 - 데이터 가공
  useEffect(() => {
    if (movieData?.data) {
      const filteredCategoryData = categoryDataFilter(movieData.data).map(
        (data: MainData[], i: number) => (
          <div key={data[0]?.movieId || i}>
            <MainCategoryContainer
              title={mainData[i].title || `Category ${i + 1}`}
              setTeaserModal={setTeaserModal}
              allData={data}
              setModalContent={setModalContent}
              modalContent={modalContent}
              setLoginMember={setLoginMember}
              viewingHistory={viewingHistory}
              setViewingHistory={setViewingHistory}
            />
          </div>
        )
      );
      setCategoryData(filteredCategoryData);
    }
  }, [movieData]);

  console.log(teaserModal);

  return (
    <div className={`${mainPageStyle}`}>
      {/* 사이드바 */}
      <SideBar
        isPage={isPage}
        setIsPage={setIsPage}
        setSearchOpen={setSearchOpen}
        setGenreOpen={setGenreOpen}
        setIsLogin={setIsLogin}
        setUserEmail={setUserEmail}
        setUserPW={setUserPW}
        loginMember={loginMember}
        setLoginMember={setLoginMember}
        isLogin={isLogin}
        setIsMeber={setIsMeber}
        setWishState={setWishState}
        wishState={wishState}
        wishMSGModal={wishMSGModal}
        setWishMSGModal={setWishMSGModal}
        isWish={isWish}
        setIsWish={setIsWish}
        setViewingHistory={setViewingHistory}
        viewingHistory={viewingHistory}
        setMemberData={setMemberData}
      />
      {/* 검색 */}
      <SearchContainer
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        movieData={movieData}
        setTeaserModal={setTeaserModal}
        setModalContent={setModalContent}
        modalContent={modalContent}
      />
      {/* 배너 */}
      <MainBannerContainer
        setBannerPosition={setBannerPosition}
        bannerPosition={bannerPosition}
      />
      {/* 콘텐츠 카테고리  */}
      {categoryData}
      {/* 장르별  */}
      {genreOpen && (
        <MainGenreContainer
          setGenreOpen={setGenreOpen}
          movieData={movieData}
          setTeaserModal={setTeaserModal}
          setModalContent={setModalContent}
          setLoginMember={setLoginMember}
          viewingHistory={viewingHistory}
        />
      )}
      {/* 티저 모달 */}
      {teaserModal ? (
        <MainContentModal
          setTeaserModal={setTeaserModal}
          setModalContent={setModalContent}
          modalContent={modalContent}
          loginMember={loginMember}
          isWishlist={true}
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
      ) : (
        <></>
      )}
      {/* 찜 추가, 삭제 메세지 모달  */}
      {teaserModal && (
        <WishModal message={isWish ? "삭제" : "추가"} opacity={wishMSGModal} />
      )}
    </div>
  );
};
export default MainPage;
