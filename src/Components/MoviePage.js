import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSingleMovie } from "../utils/singleMovieSlice";
import useVideoTrailer from "../utils/useVideoTrailer";
import Netflix_Background from "../utils/netflix_background.jpg"

const MoviePage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const singleMovieData = useSelector((store) => store.singleMovie.singleMovie);
  const videoTrailer = useSelector((store) => store.movies.trailerVideo);
  useVideoTrailer(movieId);

  const fetchingMoviePageData = async () => {
    const fetchMovie = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      API_OPTIONS
    );
    const data = await fetchMovie.json();
    console.log(data);
    dispatch(addSingleMovie(data));
  };

  useEffect(() => {
    fetchingMoviePageData();
  }, []);
  return (
    <div className="bg-slate-800">

      <div><div className="pt-10 ml-4 mb-4 text-white text-left font-bold font-serif text-4xl"> {singleMovieData?.title}</div></div>
      
      
        
        <div className="text-white font-mono text-xl ml-4">
        <div className="my-4"> DESCRIPTION - {singleMovieData?.overview}</div>
        <div className="my-4"> PRODUCTION BY -{singleMovieData?.production_companies[0]?.name}</div>
        <div className="my-4"> TAGLINE -{singleMovieData?.tagline}</div>
        <div className="my-4"> POPULARITY POINTS -{singleMovieData?.popularity}</div>
      </div>

      <div className="  rounded-xl   ">
        <iframe
          className="w-screen shadow-lg shadow-red-500 aspect-video p-10 rounded-lg"
          src={
            "https://www.youtube.com/embed/" +
            videoTrailer?.key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
        ></iframe>
      </div>

      
     
    </div>
  );
};

export default MoviePage;
