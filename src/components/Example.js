import { useEffect, useRef, useState } from 'react';
import youTubePlayer from 'youtube-player';

export const Example = () => {
  const container = useRef(null);
  const [destroyPlayerPromise, setDestroyPlayerPromise]=useState(undefined);
  const [player, setPlayer] = useState(null);
  const stateNames = {
    '-1': 'unstarted',
    0: 'ended',
    1: 'playing',
    2: 'paused',
    3: 'buffering',
    5: 'video cued',
  };
  useEffect(() => {
      createPlayer();
    return () => destroyPlayer();
  }, []);

  const destroyPlayer = () => {
    if (player) {
       player.destroy().then(() => {
        console.log('Player destroyed')
      });
      setDestroyPlayerPromise(undefined);
    }
    return Promise.resolve();
  };

  const createPlayer = () => {
    // do not attempt to create a player server-side, it won't work
    if (typeof document === 'undefined') return;
    if (destroyPlayerPromise) {
      // We need to first await the existing player to be destroyed before
      // we can re-create it.
      destroyPlayerPromise.then(createPlayer);
      return;
    }

    // create player
    const player= youTubePlayer(container.current, {
      videoId: 'M7lc1UVf-VE',
      playerVars:{
        autoplay:1,
        enablejsapi:1, // enable Iframe API
        mute:1,
        rel:0, // hide related video
        //controls:0, // remove video controls
        
      }
    })
    setPlayer(player)
    console.log('player=',player)

    player.on('ready', function () {
      console.log('player is ready.');
    });
    player.on('stateChange', function (event) {
      if (!stateNames[event.data]) {
        throw new Error('Unknown state (' + event.data + ').');
      }

      console.log(
        'State: ' + stateNames[event.data] + ' (' + event.data + ').'
      );
    });
  }

  const handleMute = () => {
    console.log('in mute= ',player)
    player.isMuted().then(value=>{
      if(value){
          player.unMute().then(()=>console.log('unmuted'));
      }else{
          player.mute().then(()=>console.log('muted'));
      }
    })
  };

  return (
    <div className='h-full'>
        <div className='w-full aspect-video'  ref={container}></div>
        <button onClick={()=>handleMute()}>Mute</button>
      </div>
  );
};
