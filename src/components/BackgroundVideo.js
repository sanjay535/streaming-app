import { useSelector } from 'react-redux';
import useMovieWithId from '../utils/hooks/useMovieWithId';

const BackgroundVideo = ({movieId}) => {
  useMovieWithId(movieId)
  const movieTrailer=useSelector(store=>store.movies.movieTrailer);
  return (
    <div className='w-full'>
      {movieTrailer &&<iframe
      className='w-full aspect-video'
        src={`https://www.youtube.com/embed/${movieTrailer.key}?playlist=${movieTrailer.key}&loop=1&autoplay=1&mute=1`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      ></iframe>}
      {/* <div className='absolute w-full bg-gradient-to-l from-white h-24 top-0'></div> */}
      
    </div>
  );
};

export default BackgroundVideo;
