import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ originalTitle, overview }) => {
  return (
    
      <div className="pt-[400px] pl-20  aspect-video w-screen pr-[1000px] absolute bg-gradient-to-r from-black ">
        <h1 className="font-bold text-white pb-2 text-3xl">{originalTitle}</h1>
        <div className="text-white pt-2">{overview}</div>
        <div className=" mt-10">
          <button className="rounded-lg  bg-white hover:bg-gray-400 hover:bg-opacity-40 hover:text-white  text-black px-6 py-2 inline-flex mr-2"><span className="mt-1 mr-2"><FaPlay /></span>Play</button>
          <button className="rounded-lg bg-white hover:bg-gray-400 hover:bg-opacity-40 hover:text-white  text-black px-6 py-2 inline-flex "><span className="mt-1 mr-2"><FaInfoCircle /></span>More Info</button>
        </div>
      </div>
   
  );
};

export default VideoTitle;
