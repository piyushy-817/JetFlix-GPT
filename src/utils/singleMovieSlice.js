import { createSlice } from "@reduxjs/toolkit";


const singleMovieSlice = createSlice({
    name : "SingleMovie",
    initialState : { singleMovie :null},
    reducers : {
        addSingleMovie : (state,action)=>{
         state.singleMovie = action.payload
        }
    }
})

export default singleMovieSlice.reducer
export const {addSingleMovie} = singleMovieSlice.actions