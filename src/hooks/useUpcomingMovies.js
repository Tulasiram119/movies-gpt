import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES } from "../utils/constant";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store=> store.movies.upcomingMovies)
    const getUpcomingMovies = async()=>{
        const fetchData = await fetch(UPCOMING_MOVIES,API_OPTIONS);
        const jsonData = await fetchData.json();
        dispatch(addUpcomingMovies(jsonData?.results));
    }
    useEffect(()=>{
        !upcomingMovies && getUpcomingMovies();
    },[])
}
export default useUpcomingMovies;