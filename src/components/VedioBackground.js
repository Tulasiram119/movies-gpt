import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


export default function VedioBackground({ movieId }) {
  useMovieTrailer(movieId);
  const trailerVedio = useSelector(store=> store?.movies?.trailerVedio)
  console.log(trailerVedio);
  return (
    <div>
      <iframe
        
        src={`https://www.youtube.com/embed/${trailerVedio?.key}`}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
}
