import React from "react";

const MovieDetailsPage = ({ movieDetails }) => {
  if (movieDetails == null) return;
  const {
    genres,
    overview,
    release_date,
    runtime,
    vote_average,
    vote_count,
    homepage,
    imdb_id,
  } = movieDetails;
  return (
    <div className="px-4">
      <div>
        <span className="text-xl font-bold">Genere: </span>
        <span className="font-normal px-1">
          {genres?.map((text, index) => text?.name + ", ")}
        </span>
      </div>
      <div className="">
        <span className="text-xl font-bold">Overview:</span>
        <span className="px-1">{overview}</span>
      </div>
      <div className="flex md:gap-8 flex-col md:flex-row gap-2">
        <div>
          <span className="text-l font-bold">Release Date :</span>
          <span className="px-1">{release_date} </span>
        </div>
        <div>
          <span className="text-l font-bold">Runtime :</span>
          <span className="px-1">{runtime + " Minutes"}</span>
        </div>
        <div>
          <span className="text-l font-bold">Vote average :</span>
          <span className="px-1">{vote_average}</span>
        </div>
        <div>
          <span className="text-l font-bold">Vote count :</span>
          <span className="px-1">{vote_count}</span>
        </div>
      </div>
      <div className="flex flex-row mt-2 ">
        <a
          href={homepage}
          className="bg-blue-600 text-white w-16 rounded-lg h-7 mr-2"
        >
          <button className="px-2">Watch</button>
        </a>
        <a
          href={"https://www.imdb.com/title/" + imdb_id}
          className="bg-blue-600 text-white w-16 rounded-lg h-7"
        >
          <button className="px-2">IMBD</button>
        </a>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
