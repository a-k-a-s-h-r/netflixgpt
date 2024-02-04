import React, { useRef } from 'react'
import { openai } from '../utils/openAi';
import options from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { updateMoviesToSlice } from '../utils/gptSearchSlice';
import { MovieList } from './MovieList';

export const GptSearchBar =  () => {

  const dispatch = useDispatch();
    const searchText = useRef(null);

    const searchMovieInTmdb = async(movieName) => {
       const json = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movieName +'&include_adult=false&language=en-US&page=1', options);
        const data = await json.json();
        return data.results;
    }
    const handleGptSearch = async () => {

        const gptQuery = "Act as a movie recommendation system and suggest me some movies for the query:"
    + searchText?.current?.value + ". Give me only 5 movies, comma seperated like the example result given ahead. Example: varisu, thunivu, endhiran, singam, ko"
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
          const movies = gptResults?.choices?.[0]?.message?.content.split(',');
        const movieArray = movies.map((a) => {
            return searchMovieInTmdb(a);
          });
         const tmdbSearchResults = await Promise.all(movieArray);
         console.log(tmdbSearchResults)

         dispatch(updateMoviesToSlice({gptMovies: movies, tmdbRecommended: tmdbSearchResults}));

    }
    const gptMovies = useSelector((store) => store?.toggleGptSearchSlice?.gptSuggestedMovies);
    const tmdbMovies = useSelector((store) => store?.toggleGptSearchSlice?.tmdbRecommended);

  return (
    <><div className='pt-[10%] flex justify-center'>
        <form onSubmit={(e)=>e.preventDefault()} className='bg-black w-1/2 grid grid-cols-12'>
            <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder='what would like to watch today'/>
            <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3' onClick={handleGptSearch}>Search</button>
        </form>
        
    </div>
   <div className='bg-black p-4 m-4'>
        <div className='text-white'>
           <MovieList movieList = {tmdbMovies} headers={gptMovies} />
        </div>    
</div>
</>
  )
}
