import React from 'react';
import MovieListTemplate from './shared/MovieListTemplate';

const MovieList = ({title, movieList}) => {
  return (
    <MovieListTemplate title={title} movieList={movieList}/>
  );
};

export default MovieList;
