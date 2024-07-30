import { useEffect, useRef, useState } from 'react';
import { mainCategoryPostBoxStyle } from '../../../style/molecule/main/category';
import { MainData } from '../../../type/data/MainData';
import {
  MainCategorysPropsType,
} from '../../../type/props/main';
import MainCategoryPost from './MainCategoryPost';
import {
  categoryScrollMouseDown,
  categoryScrollMouseLeave,
  categoryScrollMouseMove,
  categoryScrollMouseUp,
} from '../../../event/main/categoryScrollEvnet';
import { MemberDataType } from '../../../type/service/get/member';
import SubText from '../../atom/text/SubText';
import SubTitle from '../../atom/text/SubTitle';

// 카테고리 포스터 박스
const MainCategoryPostBox = ({
  setTeaserModal,
  allData,
  setModalContent,
  modalContent,
  setCategoryRef,
  loginMember,
  setClickMovie,
  title,
  setLoginMember,
  viewingHistory,
}: MainCategorysPropsType) => {
  // 카테고리 컨테이너 ref
  const categoryRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number | null>(null);

  // 시청기록의 초기 데이터
  const [viewData, setViewData] = useState<MemberDataType[]>([
    {
      id: 0,
      email: '',
      profile_id: 0,
      member_name: '',
      member_email: '',
      wishlist_id: 0,
      movie_id: 0,
      title: '',
      age_rating: '전체 관람가',
      runtime: '',
      rating: '',
      teaser_url: '',
      poster_img: '',
      plot_summary: '',
      release_date: '',
      directors: '',
      production_companies: '',
      genres: '',
      categories: '신규 콘텐츠',
      membership_level: '프리미엄(Premium) 4K+HDR',
      membership_amount: '',
      card_number: '',
      expiry_date: '',
      payment_date: '',
      card_name: '',
      payment_amount: 0,
    },
  ]);

  useEffect(() => {
    const viewHistory = localStorage.getItem('ViewingHistory');
    const history: MainData[] = viewHistory ? JSON.parse(viewHistory) : [];

    if (loginMember) {
      setViewData(
        history.map((history, i) => ({
          id: loginMember[0].id,
          email: loginMember[0].email,
          profile_id: loginMember[0].profile_id,
          member_name: loginMember[0].member_name,
          member_email: loginMember[0].member_email,
          wishlist_id: loginMember[0].wishlist_id,
          movie_id: history.movieId,
          title: history.movieTitle,
          age_rating: history.ageRating,
          runtime: history.runtime,
          rating: history.movieRating,
          teaser_url: history.teaserUrl,
          poster_img: history.posterImage,
          plot_summary: history.plotSummary,
          release_date: history.releaseDate,
          directors: history.directorNames,
          production_companies: history.productionCompanyNames,
          genres: history.genreNames,
          categories: history.categoryNames,
          membership_level: loginMember[0].membership_level,
          membership_amount: loginMember[0].membership_amount,
          card_number: loginMember[0].card_number,
          expiry_date: loginMember[0].expiry_date,
          payment_date: loginMember[0].payment_date,
          card_name: loginMember[0].card_name,
          payment_amount: loginMember[0].payment_amount,
        }))
      );
    }
  }, [loginMember, viewingHistory]);

  const [demo, setDemo] = useState<boolean>(false);

  // useEffect를 사용하여 ref를 부모 컴포넌트에 전달
  /* useEffect를 사용하지 않으면 렌더링 도중 상위 컴포넌트의 상태를 업데이트하는 에러 발생 */
  useEffect(() => {
    if (setCategoryRef) {
      setCategoryRef(categoryRef);
    }
  }, [setCategoryRef, categoryRef]);

  // 시청 기록 렌더링
  if (title === '시청기록') {
    return (
      <div
        className={`${mainCategoryPostBoxStyle}`}
        style={{ scrollbarColor: '#E50914 black', scrollbarWidth: 'thin' }}
        ref={categoryRef}
        onMouseDown={(e) =>
          categoryScrollMouseDown(
            e,
            setIsDragging,
            setStartX,
            setScrollLeft,
            categoryRef
          )
        }
        onMouseMove={(e) =>
          categoryScrollMouseMove(
            e,
            isDragging,
            startX,
            scrollLeft,
            categoryRef
          )
        }
        onMouseUp={(e) => categoryScrollMouseUp(e, setIsDragging)}
        onMouseLeave={(e) => categoryScrollMouseLeave(e)}
      >
        {viewData.length > 0 ? (
          viewData.map((history: MemberDataType) => (
            <span key={history.movie_id}>
              <MainCategoryPost
                setTeaserModal={setTeaserModal}
                loginData={history}
                setModalContent={setModalContent}
                modalContent={modalContent}
                setClickMovie={setClickMovie}
                setWishState={setDemo}
                wishState={demo}
                title=""
                setLoginMember={setLoginMember}
                viewingHistory={viewingHistory}
              />
            </span>
          ))
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <SubTitle align="text-center" text="시청 기록이 없습니다." />
          </div>
        )}
      </div>
    );
  }

  // 프로필 페이지 일떄
  if (loginMember !== undefined) {
    return loginMember[0].movie_id === null ? (
      <div className="w-full h-full flex justify-center items-center">
        <SubTitle align="text-center" text="찜한 콘텐츠가 없습니다." />
      </div>
    ) : (
      <div
        className={`${mainCategoryPostBoxStyle}`}
        style={{ scrollbarColor: '#E50914 black', scrollbarWidth: 'thin' }}
        ref={categoryRef}
        onMouseDown={(e) =>
          categoryScrollMouseDown(
            e,
            setIsDragging,
            setStartX,
            setScrollLeft,
            categoryRef
          )
        }
        onMouseMove={(e) =>
          categoryScrollMouseMove(
            e,
            isDragging,
            startX,
            scrollLeft,
            categoryRef
          )
        }
        onMouseUp={(e) => categoryScrollMouseUp(e, setIsDragging)}
        onMouseLeave={(e) => categoryScrollMouseLeave(e)}
      >
        {/* 찜한 상품 리스트를 따로 저장하여 allData 부분으로 전달해서 렌더링 해야함 */}
        {loginMember.length > 0 ? (
          loginMember?.map((loginData: MemberDataType) => (
            <span key={loginData.movie_id}>
              <MainCategoryPost
                setTeaserModal={setTeaserModal}
                loginData={loginData}
                setModalContent={setModalContent}
                modalContent={modalContent}
                setClickMovie={setClickMovie}
                setWishState={setDemo}
                wishState={demo}
                title=""
                setLoginMember={setLoginMember}
                viewingHistory={viewingHistory}
              />
            </span>
          ))
        ) : (
          <SubText align="text-center" text="찜한 콘텐츠가 없습니다." />
        )}
      </div>
    );
  }

  // 메인 페이지 일떄
  return (
    <div
      className={`${mainCategoryPostBoxStyle}`}
      style={{ scrollbarColor: '#E50914 black', scrollbarWidth: 'thin' }}
      ref={categoryRef}
      onMouseDown={(e) =>
        categoryScrollMouseDown(
          e,
          setIsDragging,
          setStartX,
          setScrollLeft,
          categoryRef
        )
      }
      onMouseMove={(e) =>
        categoryScrollMouseMove(e, isDragging, startX, scrollLeft, categoryRef)
      }
      onMouseUp={(e) => categoryScrollMouseUp(e, setIsDragging)}
      onMouseLeave={(e) => categoryScrollMouseLeave(e)}
    >
      {/* 찜한 상품 리스트를 따로 저장하여 allData 부분으로 전달해서 렌더링 해야함 */}
      {allData && allData.length > 0 ? (
        allData?.map((data: MainData) => (
          <span key={data.movieTitle}>
            <MainCategoryPost
              setTeaserModal={setTeaserModal}
              data={data}
              setModalContent={setModalContent}
              modalContent={modalContent}
              setClickMovie={setClickMovie}
              setWishState={setDemo}
              wishState={demo}
              title=""
              setLoginMember={setLoginMember}
              viewingHistory={viewingHistory}
            />
          </span>
        ))
      ) : (
        <SubText align="text-center" text="콘텐츠가 없습니다." />
      )}
    </div>
  );
};

export default MainCategoryPostBox;
