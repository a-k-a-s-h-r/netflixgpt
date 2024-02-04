import React from 'react'
import { GptSearchBar } from './GptSearchBar'
import { GptMovieSuggestions } from './GptMovieSuggestions'

export const GptContainer = () => {
  return (
    <div className=''>
        <div className='absolute -z-10'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/6fa56356-45b4-4c99-8fa0-e2d76468e004/CA-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt='logo'/>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}
