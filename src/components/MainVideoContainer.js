import React from 'react'
import VideoTitle from './VideoTitle'
import BackgroundVideo from './BackgroundVideo'
import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies';
import { useSelector } from 'react-redux';
import { getRandomMovieTrailer } from '../utils/helper';

const MainVideoContainer = () => {
  useNowPlayingMovies();
  const movies=useSelector(state=>state.movies.nowPlaying);
  console.log('movies=',movies)
  if(!movies)
  return (
    <div className='h-screen w-full bg-black flex items-center justify-center'>
      <span className='w-12 h-12 border-4 border-white border-b-[#FF3D00] rounded-full inline-block box-border animate-spin'>Loading...</span>
    </div>
  );
  const randomMovieIndex=getRandomMovieTrailer(0, movies.length);
  const {original_title, overview, id}=movies[randomMovieIndex];
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <BackgroundVideo movieId={id}/>
    </div>
  )
}

export default MainVideoContainer