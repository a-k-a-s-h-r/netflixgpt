import React from 'react'
import Header from './Header';
import usePopularMovies from '../hooks/usePopularMovies';
import { MainContainer } from './MainContainer';
import { SecondaryContainer } from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import { GptContainer } from './GptContainer';

const Browse = () => {
  usePopularMovies();
  useNowPlayingMovies();
  useTopRatedMovies();
  const isGptPage = useSelector((store) => store?.toggleGptSearchSlice?.toggleGptSearch)
  return (
    <div>
      <Header signedIn={true}/>
      {isGptPage ? <GptContainer/> : <><MainContainer />
      <SecondaryContainer /></>}
    </div>
  )
}

export default Browse;