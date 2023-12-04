import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

export default function SecondaryContainer() {
  const movies = useSelector(store =>store?.movies);
  
  return (
    <div className=' bg-black'>
      <div className='-mt-36 pl-12 relative z-20'>
      <MovieList title = {"Now Playing Movies"}  movies={movies.nowPlayingMovies}/>
      <MovieList title = {"Top Rated Movies"}  movies={movies.topRatedMovies}/>
      <MovieList title = {"Upcoming"}  movies={movies.upcomingMovies}/>
      <MovieList title = {"Popular"}  movies={movies.popularMovies}/>   
      
      </div>
    </div>
  )
}
