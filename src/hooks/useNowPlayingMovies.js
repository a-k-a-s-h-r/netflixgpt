import { useEffect } from 'react';
import options from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/nowPlayingSlice';

    
const useNowPlayingMovies = () => {

    const nowPlaying = useSelector((store) => store?.movies?.nowPlaying?.results);

    const dispatch = useDispatch();
            const fetchNowPlayingMovies = async() => {
                const res = await fetch('https://api.themoviedb.org/3/movie/now_playing', options);
                const movies = await res.json();
                dispatch(addNowPlayingMovies(movies));
            };
            useEffect(()=>{
                !nowPlaying && fetchNowPlayingMovies();
            }, [])
}
export default useNowPlayingMovies;