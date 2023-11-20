import React from 'react'
import { IMG_MOVIE_URL } from '../utils/constant'

const VideoCard = ({poster}) => {
  return (
    <div className='flex-shrink-0 mr-3'>
        <img className='w-[218] h-[290px] rounded-lg' src={IMG_MOVIE_URL+poster} alt='Movie Poster' />
    </div>
  )
}

export default VideoCard