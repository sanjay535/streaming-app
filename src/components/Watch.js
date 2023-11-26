import { useSelector } from 'react-redux';
import useMovieWithId from '../utils/hooks/useMovieWithId';
import YTPlayer from './YTPlayer';
import { useParams } from 'react-router-dom';

const Watch = () => {
  const {movieId }=useParams();
  useMovieWithId(movieId);

  const moviePlayed=useSelector(store=>store.movies.movieTrailer);
  if(!moviePlayed) return;
  return (
    <div>
      <img
        className='h-10 absolute z-10 top-10 left-6'
        src='/assets/amazon-prime-video-logo.svg'
        alt='logo'
      />
      <div className='w-full h-32 absolute bg-black'></div>
       <YTPlayer movieId={moviePlayed.key}/>
    </div>
  );
};

export default Watch;
