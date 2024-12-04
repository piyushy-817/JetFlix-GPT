import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'
import MoviePage from './MoviePage'

const MovieList = ({title , movies}) => {

  return (
   movies &&
   <div className='px-10 bg-black '>
      <h1 className='text-3xl py-10 text-white'>{title}</h1>
    <div className='flex overflow-x-scroll'>
      <div className="flex ">{movies.map((movie)=>(
        <Link key={movie.id} to={`/movies/${movie.id}`}><MovieCard   poster_path={movie.poster_path}></MovieCard></Link>
             )
      )}</div>
      
      
      
    </div>
    </div>
  )
}

export default MovieList




