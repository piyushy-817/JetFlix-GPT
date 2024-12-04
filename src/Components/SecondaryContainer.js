import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies)
  
  return (
    <div className=" bg-black">
     <div className="-mt-24 relative z-20">
      <MovieList  movies = {movies.nowPlayingmovies} title = {"Now Playing"}></MovieList>
      <MovieList movies={movies.topRatedMovies}  title = {"Top Rated Movies"}></MovieList>
      <MovieList  movies = {movies.popularMovies} title = {"Popular Movies"}></MovieList>
      <MovieList movies={movies.upcomingMovies} title = {"Upcoming Movies"}></MovieList>
      <MovieList movies={movies.airingToday} title = {"Airing Today - Series"}></MovieList>
      <MovieList movies={movies.topRatedSeries} title = {"Top Rated - Series"}></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
