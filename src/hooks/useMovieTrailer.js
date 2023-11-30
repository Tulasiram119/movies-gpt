import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const movieData = await data.json();

    const filterVedios = movieData?.results?.filter(
      (item) => item.type === "Trailer"
    );
    const trailer = filterVedios?.length
      ? filterVedios[0]
      : movieData.results[0];
    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    movieId && fetchData();
  }, [movieId]);
};

export default useMovieTrailer;
