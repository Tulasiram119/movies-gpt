import React, { useRef } from "react";
import lang from "../utils/languagrConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import NewError from "../components/NewError";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovies } from "../utils/gptSlice";
const GptSearchBar = () => {
  const language = useSelector((store) => store?.config.lang);
  const serachText = useRef();
  const dispatch = useDispatch();
  const fetchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    
    const json = await data.json(); 
       
    return json.results;
  };
  const handleGptSearchClick = async () => {
    
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query :" +
      serachText.current.value +
      ". only give me names of 5 movies, comma seperated like the example given ahead. Example results: Animal,Leo,RRR,OMG,Vikram";
    const gptApiResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptApiResults.choices) {
      return (
        <NewError message={"Gpt search failed or Gpt search limt exceeds"} />
      );
    }

    const moviesArray = gptApiResults.choices?.[0]?.message?.content.split(",");
     //const moviesArray = ["RRR","leo","animal","happy days","Midnight in paris"];

    const promiseArray = moviesArray.map((movie)=> fetchMovie(movie));
    
    const tmbdResults = await Promise.all(promiseArray);
    
    dispatch(addGptMovies({movieNames:moviesArray, movieResults:tmbdResults}))
    
  };

  return (
    <div className="pt-[50%] md:pt-[20%] z-1 flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 my-4 mx-2 col-span-8"
          type="text"
          ref={serachText}
          placeholder={lang[language].gptSearchPlaceHolder}
        />
        <button
          className="col-span-4 md:col-span-3 m-4 px-1 py-0 md:m-4 md:py-2 md:px-2 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
