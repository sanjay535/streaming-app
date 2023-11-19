import { useEffect } from 'react';
import { API_OPTION } from '../constant';
import { useDispatch } from 'react-redux';
import { addMovieTrailer } from '../movieSlice';

const useMovieWithId = (movieId) => {
  const dispatch=useDispatch();   
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    try {
      const data = await fetch(url, API_OPTION);
      const json = await data.json();
      console.log(json.results);
      const filterData=json.results?.filter(movie=>movie?.type==="Trailer")
      const trailer=filterData?.length?filterData[0]:json.results[0];
      dispatch(addMovieTrailer(trailer))
    } catch (error) {
      console.log(error);
    }
  };
};

export default useMovieWithId;
