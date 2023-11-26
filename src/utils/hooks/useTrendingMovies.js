import { useEffect } from 'react';
import { API_OPTION } from '../constant';
import { useDispatch } from 'react-redux';
import { addTrendingMovies } from '../movieSlice';

const useTrendingMovies = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    try {
      const data = await fetch(url,API_OPTION);
      const json = await data.json();
      dispatch(addTrendingMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  }
}

export default useTrendingMovies;
