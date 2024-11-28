import { useEffect } from "react"
import { API_OPTIONS } from "./Constants"
import { useDispatch } from "react-redux"
import { addNowPopularMovies } from "./movieSlice"




const usePopularMovies = ()=>{
    const dispatch = useDispatch()
 const fetchingPopularMovies = async ()=>{
   const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS)
   const popularMovies = await data.json()
   dispatch(addNowPopularMovies(popularMovies.results))
 }


 useEffect(()=>{
    fetchingPopularMovies()
 },[])


}

export default usePopularMovies