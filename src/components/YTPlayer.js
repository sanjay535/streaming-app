import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import useYTPlayer from '../utils/hooks/useYTPlayer';

const YTPlayer = ({ movieId }) => {
  const container = useRef(null);
  const [isMuted, setIsMuted]=useState(true);
  const isPlayerReady = useSelector((store) => store.player.isYTPlayerReady);
  const player = useYTPlayer(movieId, container);

  const handleMute = () => {
    player.isMuted().then((value) => {
      if (value) {
        player.unMute().then(() => setIsMuted(false));
      } else {
        player.mute().then(() => setIsMuted(true));
      }
    });
  };

  if (!isPlayerReady)
    return (
      <div className='w-full h-screen'>
        <div
          id='iframe-container'
          className='w-full h-full'
          ref={container}
        ></div>
      </div>
    );

  return (
    <div className='w-full h-full'>
      <div
        id='iframe-container'
        className='w-full h-full'
        ref={container}
      ></div>
      {isMuted?<button
        className='absolute z-20 top-[70%] left-[80%]'
        onClick={() => handleMute()}
      >
        <img className='' src='/assets/volume_off.svg' alt='play icon' />
      </button>:<button
        className='absolute z-20 top-[70%] left-[80%]'
        onClick={() => handleMute()}
      >
        <img className='' src='/assets/volume_up.svg' alt='play icon' />
      </button>}

    </div>
  );
};

export default YTPlayer;
