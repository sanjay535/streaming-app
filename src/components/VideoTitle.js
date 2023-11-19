import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='absolute text-white pt-40 pl-20 bg-gradient-to-r from-slate-700 aspect-video'>
      <h1 className='py-6 text-3xl font-bold'>{title}</h1>
      <p className='w-1/4 py-3'>{overview}</p>
      <div className='my-3'>
        <button className='w-32 bg-white text-black p-2 px-4 text-lg rounded-lg'>Play</button>
        <button className='w-32 bg-gray-400 text-white p-2 px-4 text-lg rounded-lg mx-3'>More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
