import { useEffect } from 'react';
import { API_OPTION } from '../constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../movieSlice';

const usePopularMovies = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?page=1';
    try {
      const data = await fetch(url,API_OPTION);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  }
}

export default usePopularMovies;
