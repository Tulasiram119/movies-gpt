import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { netflixLogo } from "../utils/constant";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute w-screen bg-gradient-to-b from-black flex justify-between -z-10">
        <img className=" w-screen p-0 m-0" src={netflixLogo} alt="netflixLogo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
