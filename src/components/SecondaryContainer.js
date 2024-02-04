import React from 'react'
import { MovieList } from './MovieList'
import { useSelector } from 'react-redux'

export const SecondaryContainer = () => {
  const popularMovies = useSelector((store) => store?.movies?.popularMovies?.results);
    const nowPlayingMovies = useSelector((store) => store?.nowPlayingMovies?.nowPlaying?.results);
    const topRatedMovies = useSelector((store) => store?.topRated?.topRatedMovies?.results);
    const movieList = [];
    const headers = ['Popular Movies', 'Now Playing Movies', 'Top Rated Movies'];
    movieList.push(popularMovies, nowPlayingMovies, topRatedMovies);
    console.log(movieList)
  return (
    <div className='bg-black'>
      <div className='-mt-60 relative z-20'>
      <MovieList movieList={movieList} headers={headers}/>
      </div>
    </div>

  )
}
