import { useEffect } from "react"
import { API_OPTIONS } from "./Constants"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "./movieSlice"





const useTopRatedMovies = ()=>{
const dispatch = useDispatch()
const fetchingTopRatedMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
    const topRatedMovies = await data.json()
    dispatch(addTopRatedMovies(topRatedMovies.results))
}


    useEffect(()=>{
 fetchingTopRatedMovies()
},[])


}

export default useTopRatedMovies