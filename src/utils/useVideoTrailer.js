import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from './Constants'
import { addTrailerVideo } from './movieSlice'

const useVideoTrailer = (movieId) => {
    const dispatch = useDispatch()
    
    const fetchBackgroundVideo =async()=>{
     const fetchingVideo =await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US}", API_OPTIONS)
     const videoData = await fetchingVideo.json()
 
     const filteredTrailerVideo = videoData.results?.filter((video)=>{
         return video?.type === "Trailer"
     })
     const mainTrailer = filteredTrailerVideo.length  ? filteredTrailerVideo[1] : videoData[0]
     dispatch(addTrailerVideo(mainTrailer))
    }
 
     useEffect(()=>{
         fetchBackgroundVideo()
     })
}

export default useVideoTrailer