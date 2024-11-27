import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const dispatch = useDispatch();

  const fetchingNowPlayingMovies = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await fetchData.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    fetchingNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  );
};

export default Browse;
