import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


export default function VedioBackground({ movieId }) {
  useMovieTrailer(movieId);
  
  const trailerVedio = useSelector(store=> store?.movies?.trailerVedio)
  
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVedio?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
}
