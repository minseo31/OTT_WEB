
import { genreData } from "../../../data/mainDatas";
import { genreChoiceEvnet } from "../../../event/main/GenreEvnet";
import {
  genreChoiceStyle,
  genreListBoxStyle,
  genreListHeaderStyle,
} from "../../../style/molecule/main/genre";
import { GenreHeaderPropsType } from "../../../type/props/main";

// 장르 리스트 헤더
const MainGenreHeader = ({
  genreChoice,
  setGenreChoice,
  setGenreFilterData,
  movieData,
}: GenreHeaderPropsType) => {
  return (
    <header className={`${genreListHeaderStyle}`}>
      {genreData.map((genre) => (
        <span
          key={genre.id}
          className={`${
            genreChoice === genre.genre ? genreChoiceStyle : genreListBoxStyle
          }`}
          onClick={() =>
            genreChoiceEvnet(
              genre.genre,
              setGenreChoice,
              setGenreFilterData,
              movieData
            )
          }
        >
          {genre.genre}
        </span>
      ))}
    </header>
  );
};

export default MainGenreHeader;
