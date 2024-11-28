import React, { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import usePopularMovies from "../utils/usePopularMovies";
import useTopRatedMovies from "../utils/useTopRatedMovies";
import useUpcomingMovies from "../utils/useUpcomingMovies";
import useAiringToday from "../utils/useAiringToday";
import useTopRatedSeries from "../utils/useTopRatedSeries";

const Browse = () => {
  
useNowPlayingMovies()
usePopularMovies()
useTopRatedMovies()
useUpcomingMovies()
useAiringToday()
useTopRatedSeries()


  return (
    <div>
      <Header />
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
      
    </div>
  );
};

export default Browse;
