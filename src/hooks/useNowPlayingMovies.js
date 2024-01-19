import { useEffect } from 'react';
import options from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/nowPlayingSlice';

    
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
            const fetchNowPlayingMovies = async() => {
                const res = await fetch('https://api.themoviedb.org/3/movie/now_playing', options);
                const movies = await res.json();
                dispatch(addNowPlayingMovies(movies));
            };
            useEffect(()=>{
                fetchNowPlayingMovies();
            }, [])
}
export default useNowPlayingMovies;