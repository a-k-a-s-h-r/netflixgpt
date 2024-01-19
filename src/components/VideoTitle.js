import React from 'react'

export const VideoTitle = ({title, overview}) => {
  return (
    <div className='px-20 absolute text-white w-screen aspect-video bg-gradient-to-r from-black'>
        
        <div className='pt-[80px]'>
            <div className='pt-32'>
            <p className='text-5xl font-extrabold p-2 font'>{title}</p>
            <p className='w-1/3 p-1'>{overview}</p>
        </div>
        <div className='py-4'>
            <button className='rounded border bg-gray-600 p-3 px-4 hover:opacity-25'>▶️ Play</button>
            <button className='rounded border bg-gray-600 p-3 px-3 mx-2'>ℹ️ More Info</button>
        </div>
        </div>
    </div>
  )
}
