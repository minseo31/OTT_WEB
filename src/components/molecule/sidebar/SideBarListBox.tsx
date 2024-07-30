import { Link } from "react-router-dom";
import {
  sideBarCurrenPage,
  sideBarListStyle,
  sideBarListStyleS,
  sideBarListTitle,
  sideBarNoCurrenPage,
} from "../../../style/cluster/SideBar";
import { SideBarListBoxPropsType } from "../../../type/props/sidebar";
import { handelSideBarlistPage } from "../../../event/main/sideBarEvent";
import { useEffect, useState } from "react";

// 사이드 바 리스트
const SideBarListBox = ({
  text,
  icon,
  isOpen,
  link,
  isPage,
  setIsPage,
  id,
}: SideBarListBoxPropsType) => {
  const [isText, setIsText] = useState<JSX.Element>(<></>);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 타이머 클리어 함수
    const clearExistingTimer = () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };

    if (isOpen) {
      clearExistingTimer(); // 이전 타이머 클리어

      const newTimerId = setTimeout(() => {
        setIsText(<span className={`${sideBarListTitle}`}>{text}</span>);
      }, 300);

      setTimerId(newTimerId); // 새로운 타이머 ID 설정
    } else {
      // 사이드바가 열려있지 않을 때는 텍스트를 비웁니다
      setIsText(<></>);
      clearExistingTimer(); // 사이드바가 닫힐 때는 타이머 클리어
    }

    // 클린업 함수
    return () => {
      clearExistingTimer();
    };
  }, [isOpen, text]);

  return (
    <Link
      to={link}
      className={`${isOpen ? sideBarListStyle : sideBarListStyleS} ${
        isPage === id ? sideBarCurrenPage : sideBarNoCurrenPage
      } transition-all duration-300`}
      onClick={() => handelSideBarlistPage(id, setIsPage)}
    >
      {icon}
      {isOpen && isText}
    </Link>
  );
};

export default SideBarListBox;
