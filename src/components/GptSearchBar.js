import React from "react";
import lang from "../utils/languagrConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector(store => store?.config.lang);
  return (
    <div className="z-1 pt-[20%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input className="p-4 m-4 col-span-9" type="text" placeholder={lang[language].gptSearchPlaceHolder}/>
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">{lang[language].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
