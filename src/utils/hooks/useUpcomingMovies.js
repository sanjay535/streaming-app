import { useEffect } from 'react';
import { API_OPTION } from '../constant';
import { useDispatch } from 'react-redux';
import { addUpcomingingMovies } from '../movieSlice';

const useUpcomingMovies = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    fetchUpcoming();
  }, []);

  const fetchUpcoming = async () => {
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    try {
      const data = await fetch(url,API_OPTION);
      const json = await data.json();
      console.log(json.results);
      dispatch(addUpcomingingMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  }
}

export default useUpcomingMovies;
