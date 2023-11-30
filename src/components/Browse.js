import React from 'react'
import Header from './Header'
import useNowPalyingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'


export default function Browse() {
  useNowPalyingMovies()
  usePopularMovies();
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}
