import { posterStyle } from "../../style/atom/poster";
import { PosterPropsType } from "../../type/props/atom";

// 포스터 이미지 - imgURL은 이미지 URL입니다.
const Poster = ({ imgURL }: PosterPropsType) => {
  return <img src="" alt="" className={`${posterStyle} `} />;
};

export default Poster;
