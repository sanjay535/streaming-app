import React from 'react'
import { IMG_MOVIE_URL } from '../utils/constant'

const MovieCard = ({poster, movieId}) => {
  if(!poster)
  return (
    <div className='flex-shrink-0 mr-3'>
        <span className='block w-[218px] h-[290px] rounded-lg bg-slate-600'></span>
    </div>
  )
  return (
    <div className='flex-shrink-0 mr-3 opacity-90 hover:opacity-100'>
       <a href={'/watch/'+movieId}> <img className='w-[118px] h-[190] md:w-[218px] md:h-[290px] rounded-lg' src={IMG_MOVIE_URL+poster} alt='Movie Poster' /></a>
    </div>
  )
}

export default MovieCard