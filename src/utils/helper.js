export const getRandomMovieTrailer=(min, max)=>{
    // return [min,max) for including max as well do like Math.floor(Math.random()*(max-min+1)+min)
    return Math.floor(Math.random()*(max-min)+min);
}