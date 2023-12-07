import React from "react";
import { IMAGE_CDN_URL } from "../utils/constant";

function MovieCard({ posterPath,title }) {
  if(posterPath)
  return (
    <div className="w-48 mx-2">
      <img
        src={IMAGE_CDN_URL + posterPath}
        alt={title}
      />
    </div>
  );
}

export default MovieCard;
