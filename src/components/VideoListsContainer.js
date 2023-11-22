import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';
import usePopularMovies from '../utils/hooks/usePopularMovies';
import useTrendingMovies from '../utils/hooks/useTrendingMovies';
import useUpcomingMovies from '../utils/hooks/useUpcomingMovies';

const VideoListsContainer = () => {
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies()
  const nowPlaying = useSelector((store) => store.movies.nowPlaying);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);
  const upComingMovies = useSelector((store) => store.movies.upcomingingMovies);
  return (
    <div className='w-screen bg-black pb-8'>
      <div className='-mt-40 z-20 relative'>
        <MovieList title={'Now Playing'} movieList={nowPlaying}/>
      </div>
      <MovieList title={'Popular Movies'} movieList={popularMovies}/>
      <MovieList title={'Upcoming Movies'} movieList={upComingMovies}/>
      <MovieList title={'Trending Search'} movieList={trendingMovies}/>
    </div>
  )
}

export default VideoListsContainer