import { API_OPTIONS } from "./constant";

export const fetchYoutubeTrailerId = async (movieId, setTrailerId) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
    API_OPTIONS
  );

  const movieData = await data?.json();

  const filterVedios = movieData?.results?.filter(
    (item) => item.type === "Trailer"
  );
  const trailer = filterVedios?.length ? filterVedios[0] : movieData.results[0];

  setTrailerId(trailer?.key);
};
