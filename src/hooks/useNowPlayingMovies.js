import { API_OPTIONS, NOW_PLAYING_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useNowPalyingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_URL, API_OPTIONS);
    const moviesData = await data.json();

    dispatch(addNowPlayingMovies(moviesData.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPalyingMovies;
