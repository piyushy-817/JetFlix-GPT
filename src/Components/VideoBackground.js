import React from "react";
import { useSelector } from "react-redux";
import useVideoTrailer from "../utils/useVideoTrailer";

const VideoBackground = ({ movieId }) => {
  useVideoTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  return (
    <div >
      <iframe 
        className="w-screen aspect-video "
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
      
      ></iframe>
    </div>
  );
};

export default VideoBackground;
