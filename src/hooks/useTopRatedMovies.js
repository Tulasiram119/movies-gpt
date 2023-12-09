import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES } from "../utils/constant";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store=> store.movies.topRatedMovies)
    const getTopRatedMovies = async()=>{
        const fetchData = await fetch(TOP_RATED_MOVIES,API_OPTIONS);
        const jsonData = await fetchData.json();
        dispatch(addTopRatedMovies(jsonData?.results));
    }
    useEffect(()=>{
       !topRatedMovies && getTopRatedMovies();
    },[])
}
export default useTopRatedMovies;