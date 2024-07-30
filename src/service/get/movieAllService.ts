import axios from "axios";
import { MovieResponseType } from "../../type/service/get/movie";
import { responseError } from "../../util/error/service/responseError";
import { axiosError } from "../../util/error/service/axiosError";

export const fetchMovies = async (): Promise<MovieResponseType> => {
  try {
    const response = await axios.get<MovieResponseType>(
      "https://ott-ss.azurewebsites.net/movie/all",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT 토큰을 헤더에 포함
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      error.response
        ? responseError(error.response)
        : axiosError(error.response);
    } else {
      // 그 외의 에러
      console.error("알 수 없는 에러가 발생했습니다:", error);
    }
    throw error; // 에러를 다시 던져서 호출하는 곳에서 처리할 수 있게 합니다.
  }
};
