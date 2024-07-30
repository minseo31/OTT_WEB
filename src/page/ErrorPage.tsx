import { Link } from "react-router-dom";
import Fulllogo from "../components/atom/logo/Fulllogo";
import MainText from "../components/atom/text/MainText";
import {
  errorPageContainer,
  errorPageContentBox,
  errorPageTitle,
} from "../style/errorPage";
import MainBgImg from "../components/atom/bg/MainBgImg";
import BigBtn from "../components/atom/button/BigBtn";

// 에러 페이지
const ErrorPage = () => {
  return (
    <div className={`${errorPageContainer}`}>
      <MainBgImg />
      <div className={`${errorPageContentBox}`}>
        {/* 넷플릭스 로고 */}
        <Fulllogo height="h-[150px]" width="w-[300px]" />
        {/* 타이틀 404 */}
        <h1 className={`${errorPageTitle}`}>404</h1>
        <MainText
          text="예기치 못한 에러가 발생하였습니다!"
          align="text-center"
        />
        {/* 홈 페이지로 돌아가기 */}
        <Link to="/" className="cursor-pointer">
          <BigBtn bgColor="bg-main_Red" text="돌아가기" textColor="white" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
