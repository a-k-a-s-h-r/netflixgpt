import React from 'react'

export const MovieCard = ({posterPath}) => {
  return (
    <div className='pr-3 w-48'>
        <img alt='movie card' className='w-48' src={'https://image.tmdb.org/t/p/w500/'+posterPath}/>
    </div>
  )
}
