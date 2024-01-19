import React from 'react'
import Header from './Header';
import usePopularMovies from '../hooks/usePopularMovies';
import { MainContainer } from './MainContainer';
import { SecondaryContainer } from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';

const Browse = () => {
  usePopularMovies();
  useNowPlayingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header signedIn={true}/>
      <MainContainer />
      <SecondaryContainer />
    </div>
    
  )
}

export default Browse;