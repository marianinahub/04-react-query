import axios from "axios";
import type { Movie } from "../types/movie";

interface FetchMovieService {
  results: Movie[];
  page: number;
  total_pages: number;
}

export const fetchMovies = async (
  movieName: string,
  page: number,
): Promise<FetchMovieService> => {
  const response = await axios.get<FetchMovieService>(
    "https://api.themoviedb.org/3/search/movie",
    {
params: {
  api_key: "3a59e86b917cbfdc001466c7b20139c0",
  query: movieName,
  include_adult: false,
  language: "en-US",
  page,
}
    },
  );

  return response.data;
};
