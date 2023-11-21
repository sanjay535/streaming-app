import { useSelector } from 'react-redux';

const VideoTitle = ({ title, overview }) => {
  const isPlayerReady=useSelector(store=>store.player.isYTPlayerReady);
  if(!isPlayerReady) return;
  return (
    <div className='absolute w-full text-white pt-40 pl-20 bg-gradient-to-r from-slate-700 aspect-video'>
      <h1 className='py-6 text-3xl font-bold'>{title}</h1>
      <p className='w-1/4 py-3'>{overview}</p>
      <div className='my-3 flex'>
        <button className='w-36 flex justify-center items-center bg-white text-black p-2 px-4 text-lg rounded-lg hover:bg-opacity-80'>
          <img className='mr-1' src='/assets/play.svg' alt='play icon' /> <span>Play</span>
        </button>
        <button className='w-36 flex justify-center items-center bg-gray-400 text-white p-2 px-4 text-lg rounded-lg mx-3 hover:bg-opacity-80'>
          <img className='h-5' src='/assets/info.svg' alt='play icon' />{' '}
          <span>More info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
