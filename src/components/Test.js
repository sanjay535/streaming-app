import { useSelector } from 'react-redux';
import useMovieWithId from '../utils/hooks/useMovieWithId';
import YTPlayer from './YTPlayer';
import { useParams } from 'react-router-dom';

const Test = () => {
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
       <YTPlayer movieId={moviePlayed.key} />
      <div className='w-full text-white h-32 absolute -bottom-28 bg-black'>
      <h1 className='py-6 text-3xl font-bold'>{moviePlayed?.original_title}</h1>
      <p className='w-1/4 py-3'>{moviePlayed?.overview}</p>
      </div>
    </div>
  );
};

export default Test;
