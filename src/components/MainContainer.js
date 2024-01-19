import React from 'react'
import { VideoTitle } from './VideoTitle'
import { VideoBackground } from './VideoBackground'
import { useSelector } from 'react-redux'
import Header from './Header'

export const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.popularMovies?.results);
    if(!movies) return;

    const mainMovie = movies[0];
    console.log(mainMovie?.id)

  return (
    <div>
        <VideoTitle title={mainMovie?.title} overview={mainMovie?.overview}/>
        <VideoBackground movieId={mainMovie?.id}/>
    </div>
  )
}
