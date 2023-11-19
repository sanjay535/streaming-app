import React from 'react';
import useMovieWithId from '../utils/hooks/useMovieWithId';

const BackgroundVideo = ({movieId}) => {
  useMovieWithId(movieId)
  return (
    <div className='w-full'>
      <iframe
      className='w-full aspect-video'
        src='https://www.youtube.com/embed/X4d_v-HyR4o?playlist=X4d_v-HyR4o&loop=1&autoplay=1&mute=1'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
