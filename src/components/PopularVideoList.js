import React from 'react';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';

const PopularVideoList = ({ title }) => {
  const nowPlaying = useSelector((store) => store.movies.nowPlaying);
  return (
    <div className='mx-8'>
      <h1 className='text-white text-2xl font-normal py-6'>{title}</h1>
      <div className='w-full h-[300px] overflow-hidden shadow-sm'>
          <div className='flex overflow-x-auto pb-96 overflow-y-hidden'>
            {nowPlaying &&
              nowPlaying.map((movie) => (
                <VideoCard key={movie.id} poster={movie.poster_path} />
              ))}
          </div>
      </div>
    </div>
  );
};

export default PopularVideoList;
