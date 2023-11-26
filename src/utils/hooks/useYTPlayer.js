import { useEffect, useState } from "react";
import youTubePlayer from 'youtube-player';
import { playerVars, stateNames } from "../constant";
import { useDispatch } from "react-redux";
import { updateIsYTPlayerReady } from "../playerSlice";

const useYTPlayer = (movieId,container) => {
    const dispatch=useDispatch();
    const [destroyPlayerPromise, setDestroyPlayerPromise]=useState(undefined);
    const [player, setPlayer] = useState(null);
   
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
        playerVars:playerVars
      })
      console.log('player=',player);
      player.getIframe().then((iframe) => {
         iframe.setAttribute('class', 'w-full h-full aspect-video');
      })
  
      setPlayer(player)
  
      player.on('ready', function () {
        console.log('player is ready.');
        dispatch(updateIsYTPlayerReady(true))
        // setInterval(()=>{player.getCurrentTime().then(progress=>console.log(progress))},1000)
        
      });

      player.on('stateChange', function (event) {
        if (!stateNames[event.data]) {
          throw new Error('Unknown state (' + event.data + ').');
        }
        console.log('EventData=',event);
        if(event.data===0){
            player.playVideo().then(()=>console.log("Re played..."))
        }
        if(event.data===1){
          player.getCurrentTime().then(progress=>console.log('currentTime=',progress))
          player.getDuration().then(progress=>console.log('duration=',progress))
        }
        console.log(
          'State: ' + stateNames[event.data] + ' (' + event.data + ').'
        );
      });
    
    }
    return player
}

export default useYTPlayer