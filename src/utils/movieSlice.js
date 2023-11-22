import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    nowPlaying: null,
    movieTrailer: null,
    popularMovies:null,
    trendingMovies:null,
    upcomingingMovies:null
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addUpcomingingMovies: (state, action) => {
      state.upcomingingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovie, addMovieTrailer,addPopularMovies,addTrendingMovies,addUpcomingingMovies } = movieSlice.actions;
export default movieSlice.reducer;
