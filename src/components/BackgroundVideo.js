import { useSelector } from 'react-redux';
import useMovieWithId from '../utils/hooks/useMovieWithId';
import  YTPlayer from './YTPlayer';

const BackgroundVideo = ({movieId}) => {
  useMovieWithId(movieId)
  const movieTrailer=useSelector(store=>store.movies.movieTrailer);
  return (
    <div className='w-full'>
      {/* {movieTrailer &&<iframe
      className='w-full aspect-video'
        src={`https://www.youtube.com/embed/${movieTrailer.key}?playlist=${movieTrailer.key}&loop=1&autoplay=1&mute=1`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      ></iframe>} */}
      {movieTrailer && <YTPlayer movieId={movieTrailer.key} muteValue={true}/>}
      
    </div>
  );
};

export default BackgroundVideo;
