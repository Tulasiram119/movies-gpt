import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchYoutubeTrailerId } from "../utils/fetchYoutubeTrailerId";
import MovieDetailsPage from "./MovieDetailsPage";
import { API_OPTIONS } from "../utils/constant";

const WatchPage = () => {
  const [trailerId, setTrailerId] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const [params] = useSearchParams();
  const movieId = params.get("id");
  const fetchMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      API_OPTIONS
    );

    const json = await data.json();

    setMovieDetails(json);
  };
  useEffect(() => {
    fetchYoutubeTrailerId(movieId, setTrailerId);
    fetchMovieDetails();
  }, []);
  return (
    <div className="w-[100%] md:pl-2">
      <div className="w-full md:pt-[5%]  rounded-lg pt-[30%]  bg-white mb-2 md:mb-0 ">
        <div className="wrapper">
          {trailerId !== "" && (
            <iframe
              src={"https://www.youtube.com/embed/" + trailerId + "?autoplay=1"}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mt-[7.5%] md:mt-0"
            ></iframe>
          )}
        </div>
      </div>
      <div className=" md:mt-[3%] mt-[8%]">
        <MovieDetailsPage movieDetails={movieDetails} />
      </div>
    </div>
  );
};

export default WatchPage;
