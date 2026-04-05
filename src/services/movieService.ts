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
        query: movieName,
        include_adult: false,
        language: "en-US",
        page,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    },
  );

  return response.data;
};