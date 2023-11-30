import React from "react";
import MovieCard from "./MovieCard";


const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className=" px-6 overflow-hidden">
      <h1 className="m-2 text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        
        <div className="flex">
          {movies.length > 0 &&
            movies?.map((movie) => (
             <MovieCard  posterPath={movie.poster_path} title={title} />
             
            ))}
        </div>
      </div>
      <MovieCard />
    </div>
  );
};

export default MovieList;
