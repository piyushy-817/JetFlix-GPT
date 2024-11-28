import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"



  
const MainContainer = ()=>{
   const movies = useSelector((store)=>store.movies?.nowPlayingmovies)
   if(!movies) return;


   const mainMovie = movies[0]
   const {original_title, overview,id} = mainMovie;

   

    return(
        <div>
            <VideoTitle originalTitle = {original_title} movieId={id} overview = {overview}></VideoTitle>
            <VideoBackground movieId={id}></VideoBackground>
        </div>
    )
}

export default MainContainer