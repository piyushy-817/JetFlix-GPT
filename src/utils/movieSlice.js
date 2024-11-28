import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingmovies: null, trailerVideo: null},
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingmovies = action.payload;
    },addNowPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },addAiringToday: (state, action) => {
      state.airingToday = action.payload;
    },addTopRatedSeries: (state, action) => {
      state.topRatedSeries = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload
    },
  },
});

export default movieSlice.reducer;
export const { addNowPlayingMovies , addTopRatedSeries,   addTrailerVideo , addNowPopularMovies , addTopRatedMovies , addUpcomingMovies, addAiringToday } = movieSlice.actions;
