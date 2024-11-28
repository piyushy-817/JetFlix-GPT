import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "./Constants"
import { addUpcomingMovies } from "./movieSlice"

const useUpcomingMovies = ()=>{
const dispatch = useDispatch()

const fetchingUpcomingMovies = async()=>{
    const data = await 
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
    const upcomingMovies = await data.json()
    dispatch(addUpcomingMovies(upcomingMovies.results))
}




    useEffect(()=>{
    fetchingUpcomingMovies()
    },[])
}

export default useUpcomingMovies