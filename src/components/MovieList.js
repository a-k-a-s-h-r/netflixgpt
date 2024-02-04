import React from 'react'
import { MovieCard } from './MovieCard'

export const MovieList = (props) => {
    const {movieList, headers} = props
  return (
    <div>
        {
            movieList?.map((movie, index) => {
                return (<div key={index}>
                    <h1 className='text-white ps-4'>{headers[index]}</h1>
            <div className='scroll-container flex overflow-x-scroll'>
        <div className='flex'>{
        movie?.map((a) => {
            return <MovieCard posterPath={a?.poster_path} key={a?.id}/>
        })
    }</div>
    </div>
            </div>)
            })
        }

    {/* <h1 className='text-white ps-4'>Popular Movies</h1>
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
    </div> */}
    </div>
  )
}
