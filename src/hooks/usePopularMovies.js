import { API_OPTIONS, POPULAR_MOVIES } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(store=> store.movies.popularMovies)
  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES, API_OPTIONS);
    const moviesData = await data.json();

    dispatch(addPopularMovies(moviesData.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
    
  }, []);
};

export default usePopularMovies;
