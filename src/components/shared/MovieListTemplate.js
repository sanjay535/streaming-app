import React from 'react';
import MovieCard from '../MovieCard';

const MovieListTemplate = ({ title, movieList }) => {
  return (
    <div className='mx-8'>
      <h1 className='text-white text-2xl font-normal py-6'>{title}</h1>
      <div className='w-full h-[300px] overflow-hidden shadow-sm'>
        <div className='flex overflow-x-auto pb-96 overflow-y-hidden'>
          {movieList &&
            movieList.map((movie) => (
              <MovieCard
                key={movie.id}
                poster={movie.poster_path}
                movieId={movie.id}
                title={movie.original_title}
                overview={movie.overview}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListTemplate;
