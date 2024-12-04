import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import moviesReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import singleMovieReducer from "./singleMovieSlice"

const appStore = configureStore({
    reducer:{
       user : userReducer,
       movies : moviesReducer,
       gpt : gptReducer,
       singleMovie : singleMovieReducer,
    }
})

export default appStore