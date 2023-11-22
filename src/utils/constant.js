export const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2Y2YmNjYzlhNzM4MzE5YmIwNmE0ZjFjZmQwNTA1OSIsInN1YiI6IjY1NWEyNDUyYjU0MDAyMTRkM2NiNzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ksWxmTSxnLZBaijgGqqDivHRVvOg0vTN8BR5nz-iN6Q',
  },
};

export const IMG_MOVIE_URL='https://image.tmdb.org/t/p/w200'
export const stateNames = {
  '-1': 'unstarted',
  0: 'ended',
  1: 'playing',
  2: 'paused',
  3: 'buffering',
  5: 'video cued',
};

export const playerVars={
  autoplay:1,
  enablejsapi:1, // enable Iframe API
  mute:1,
  loop:1,
  rel:0, // hide related video
  controls:0, // remove video controls
}
