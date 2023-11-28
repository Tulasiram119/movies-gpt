import React from 'react'
import { useSelector } from 'react-redux'
import VedioBackground from './VedioBackground';
import VedioTitle from './VedioTitle';

export default function MainContainer() {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[0];
    const original_title = mainMovie?.original_title;
    const overview = mainMovie?.overview;
    const id = mainMovie?.id;
    
  return (
    <div>
      
      <VedioTitle title= {original_title} overview = {overview} />
      <VedioBackground movieId={id}/>
      
    </div>
  )
}
