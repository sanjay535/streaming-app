import React from 'react'
import VideoTitle from './VideoTitle'
import BackgroundVideo from './BackgroundVideo'
import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies';
import { useSelector } from 'react-redux';

const MainVideoContainer = () => {
  useNowPlayingMovies();
  const movies=useSelector(state=>state.movies.nowPlaying);
  console.log('movies=',movies)
  if(!movies) return
  const {original_title, overview, id}=movies[0];
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <BackgroundVideo movieId={id}/>
    </div>
  )
}

export default MainVideoContainer