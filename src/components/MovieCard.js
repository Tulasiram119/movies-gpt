import React from "react";
import { IMAGE_CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

function MovieCard({ id, posterPath, title }) {
  if (posterPath)
    return (
      <div className="w-36 md:w-48 mx-2">
        <Link to={"/browse/watchpage?id="+id}>
          <img src={IMAGE_CDN_URL + posterPath} alt={title} />
        </Link>
      </div>
    );
}

export default MovieCard;
