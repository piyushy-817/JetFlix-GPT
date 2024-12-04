import { useEffect } from "react"
import { API_OPTIONS } from "./Constants"
import { addTopRatedSeries } from "./movieSlice"
import { useDispatch } from "react-redux"

const useTopRatedSeries = () => {
    const dispatch = useDispatch()
    const fetchingTopRatedSeries = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS)
        const topRatedMovies = await data.json()
        dispatch(addTopRatedSeries(topRatedMovies.results))
    }
    
    
        useEffect(()=>{
     fetchingTopRatedSeries()
    },[])
    
}

export default useTopRatedSeries