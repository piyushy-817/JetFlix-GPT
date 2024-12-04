import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import NetflixBackground from "../utils/netflix_background.jpg";

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
            <img src={NetflixBackground}></img>
        </div>
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggestions></GptMovieSuggestions>
    </div>
  );
};

export default GptSearch;
