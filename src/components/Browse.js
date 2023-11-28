import React from 'react'
import Header from './Header'
import useNowPalyingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


export default function Browse() {
  useNowPalyingMovies()
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}
