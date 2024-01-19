import React from 'react'
import { MovieCard } from './MovieCard'
import { useSelector } from 'react-redux'

export const MovieList = () => {
    const popularMovies = useSelector((store) => store?.movies?.popularMovies?.results);
    const nowPlayingMovies = useSelector((store) => store?.nowPlayingMovies?.nowPlaying?.results);
    const topRatedMovies = useSelector((store) => store?.topRated?.topRatedMovies?.results);

  return (
    <div className='-mt-60 relative z-20'><h1 className='text-white ps-4'>Popular Movies</h1>
    <div className='scroll-container flex overflow-x-scroll'>
        
        <div className='flex'>{
        popularMovies?.map((a) => {
            return <MovieCard posterPath={a?.poster_path} key={a?.id}/>
        })
    }</div>
    </div>
    <h1 className='text-white ps-4'>Now Playing Movies</h1>
    <div className='scroll-container flex overflow-x-scroll'>
        
        <div className='flex'>{
        nowPlayingMovies?.map((a) => {
            return <MovieCard posterPath={a?.poster_path} key={a?.id}/>
        })
    }</div>
    </div>
    <h1 className='text-white ps-4'>Top Rated Movies</h1>
    <div className='scroll-container flex overflow-x-scroll'>
        
        <div className='flex'>{
        topRatedMovies?.map((a) => {
            return <MovieCard posterPath={a?.poster_path} key={a?.id}/>
        })
    }</div>
    </div>
    </div>
  )
}
