import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import moviesReducer from "./movieSlice"
import SingleMovieReducer from "./singleMovieSlice"

const appStore = configureStore({
    reducer:{
       user : userReducer,
       movies : moviesReducer,
       singleMovie : SingleMovieReducer,
    }
})

export default appStore