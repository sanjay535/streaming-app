import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import youTubePlayer from 'youtube-player';

 const YTPlayer = ({movieId}) => {
  const container = useRef(null);
  const [isPlayerReady, setIsPlayerReady]=useState(false);
  const dispatch=useDispatch();
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
    console.log('useEffect Called');
      createPlayer();
    return () => destroyPlayer();
  }, [movieId]);

  const destroyPlayer = () => {
    console.log('destroyPlayer called')
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
    console.log('createPlayer called');
    if (typeof document === 'undefined') return;
    if (destroyPlayerPromise) {
      // We need to first await the existing player to be destroyed before
      // we can re-create it.
      destroyPlayerPromise.then(createPlayer);
      return;
    }

    // create player
    const player= youTubePlayer(container.current, {
      videoId: movieId,
      playerVars:{
        autoplay:1,
        enablejsapi:1, // enable Iframe API
        mute:1,
        loop:1,
        rel:0, // hide related video
        //controls:0, // remove video controls
       fs:1
      }
    })
    console.log('player=',player);
    player.getIframe().then((iframe) => {
       iframe.setAttribute('class', 'w-full h-full aspect-video');
    })

    setPlayer(player)

    player.on('ready', function () {
      console.log('player is ready.');
      setIsPlayerReady(true)
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

  console.log('isPlayerReady=',isPlayerReady);
 if(!isPlayerReady)
 return (
  <div className='w-full h-screen'>
      <div id='iframe-container' className='w-full h-full'  ref={container}></div>
    </div>
 );

  return (
    <div className='w-full h-full'>
        <div id='iframe-container' className='w-full h-full'  ref={container}></div>
        <button className='absolute z-20 top-[70%] left-[80%]' onClick={()=>handleMute()}>
          <img className='' src='/assets/volume_up.svg' alt='play icon' />
        </button>
      </div>
  );
};

export default YTPlayer;