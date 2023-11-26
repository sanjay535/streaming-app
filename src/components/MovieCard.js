import React from 'react'
import { IMG_MOVIE_URL } from '../utils/constant'
import { Link } from 'react-router-dom'

const MovieCard = ({poster, movieId}) => {
  if(!poster)
  return (
    <div className='flex-shrink-0 mr-3'>
        <span className='block w-[218px] h-[290px] rounded-lg bg-slate-600'></span>
    </div>
  )
  return (
    <div className='flex-shrink-0 mr-3 opacity-90 hover:opacity-100'>
       <Link to={'/watch/'+movieId}> <img className='w-[218px] h-[290px] rounded-lg' src={IMG_MOVIE_URL+poster} alt='Movie Poster' /></Link>
    </div>
  )
}

export default MovieCard