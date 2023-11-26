import { useEffect } from 'react';
import { API_OPTION } from '../constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovie } from '../movieSlice';

const useNowPlayingMovies = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    fetchNowPlaying();
  }, []);

  const fetchNowPlaying = async () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
    try {
      const data = await fetch(url,API_OPTION);
      const json = await data.json();
      dispatch(addNowPlayingMovie(json.results));
    } catch (error) {
      console.log(error);
    }
  }
}

export default useNowPlayingMovies;
