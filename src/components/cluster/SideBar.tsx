import { useEffect, useState } from "react";
import {
  sideBarListBoxStyle,
  sideBarListBoxStyleMain,
  sideBarListBoxStyleS,
  sideBarListStyle,
  sideBarOpenIconBoxStyle,
  sideBarOpenIconBoxStyleS,
  sideBarStyle,
  sideBarStyleS,
  viewingHistoryContainerStyle,
} from "../../style/cluster/SideBar";
import Fulllogo from "../atom/logo/Fulllogo";
import SideBarListBox from "../molecule/sidebar/SideBarListBox";
import Homeicon from "../icon/Homeicon";
import Arrowicon from "../icon/Arrowicon";
import Usericon from "../icon/Usericon";
import { handleSideBarOpen } from "../../event/main/sideBarEvent";
import Shortlogo from "../atom/logo/Shortlogo";
import { SideBarPropsType } from "../../type/props/propfile";
import Categoryicon from "../icon/Categoryicon";
import { searchInputFocusEvent } from "../../event/main/searchEvnet";
import { genreContainerOpenEvent } from "../../event/main/GenreEvnet";
import { Link, useParams } from "react-router-dom";
import ViewingHistory from "../molecule/sidebar/ViewingHistory";
import SubTitle from "../atom/text/SubTitle";
import SubText from "../atom/text/SubText";
import MainText from "../atom/text/MainText";

// 사이드 바
const SideBar = ({
  isPage,
  setIsPage,
  setSearchOpen,
  setGenreOpen,
  viewingHistory,
  setWishState,
  wishState,
  setWishMSGModal,
  isWish,
  setIsWish,
  setViewingHistory,
  wishMSGModal,
  loginMember,
  setMemberData,
  memberData
}: SideBarPropsType) => {
  // 사이드 바 오픈 상태
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [parmId, setParm] = useState<number | null>(null);
  const { id } = useParams();

  // 장르 컨테이너 등장
  useEffect(() => {
    if (isPage === "s4") {
      genreContainerOpenEvent(setGenreOpen, true);
    }

    const viewingHistory = localStorage.getItem("ViewingHistory");

    if (viewingHistory) {
      setViewingHistory(JSON.parse(viewingHistory));
    }
  }, []);

  useEffect(() => {
    const loginEmail = localStorage.getItem("loginEmail");

    if (loginMember) {
      setParm(loginMember[0].id);
    }
  }, [loginMember, isPage]);

  return (
    <aside
      className={`${
        isOpen ? sideBarStyle : sideBarStyleS
      } transition-all duration-300`}
      onClick={() => searchInputFocusEvent(setSearchOpen, false)}
    >
      <div
        className={`${
          isOpen ? sideBarListBoxStyle : sideBarListBoxStyleS
        } transition-all duration-300`}
      >
        <Link
          to="/"
          onClick={() => {
            setIsPage("s1");
            genreContainerOpenEvent(setGenreOpen, false);
          }}
        >
          {isOpen ? (
            <Fulllogo width="w-[200px]" height="h-[100px]" />
          ) : (
            <div className="h-[100px] py-4">
              <Shortlogo />
            </div>
          )}
        </Link>
        <div
          className={`${sideBarListBoxStyleMain} ${
            isOpen ? "gap-0" : "gap-8"
          } transition-all duration-300`}
          onClick={() => genreContainerOpenEvent(setGenreOpen, false)}
        >
          <SideBarListBox
            text="홈"
            icon={<Homeicon />}
            isOpen={isOpen}
            link="/"
            isPage={isPage}
            setIsPage={setIsPage}
            id="s1"
          />
        </div>
        <SideBarListBox
          text="프로필"
          icon={<Usericon />}
          isOpen={isOpen}
          link={`/profile/${parmId !== null ? parmId : "NotUserId"}`} // null일 경우 에러 문자열로 처리
          isPage={isPage}
          setIsPage={setIsPage}
          id="s2"
        />
        <div
          className={`${sideBarListBoxStyleMain}`}
          onClick={() => genreContainerOpenEvent(setGenreOpen, true)}
        >
          <SideBarListBox
            text="장르별"
            icon={<Categoryicon />}
            isOpen={isOpen}
            link="/"
            isPage={isPage}
            setIsPage={setIsPage}
            id="s4"
          />
        </div>
      </div>
      <div
        className={`${viewingHistoryContainerStyle} ${
          isOpen ? "px-4" : "px-2"
        } `}
      >
        {/* 시청 기록 */}
        <div className="w-full h-fit border-b-2 border-[#E50914] py-2 transition-all duration-300">
          <MainText
            text="시청기록"
            align={isOpen ? "text-start" : "text-center"}
          />
        </div>
        <ViewingHistory
          viewingHistory={viewingHistory}
          setWishState={setWishState}
          wishState={wishState}
          setWishMSGModal={setWishMSGModal}
          isWish={isWish}
          setIsWish={setIsWish}
          setViewingHistory={setViewingHistory}
          wishMSGModal={wishMSGModal}
          isOpen={isOpen}
          setMemberData={setMemberData}
          memberData={memberData}
        />
      </div>
      {/* 사이드바 오픈 상태  */}
      <div
        className={`${
          isOpen ? sideBarOpenIconBoxStyle : sideBarOpenIconBoxStyleS
        }`}
        onClick={() => handleSideBarOpen(setIsOpen)}
      >
        <Arrowicon direction={isOpen ? "rotate-180" : "rotate-0"} />
      </div>
    </aside>
  );
};

export default SideBar;


