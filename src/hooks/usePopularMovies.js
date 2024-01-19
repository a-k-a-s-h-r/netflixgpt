import { useEffect } from 'react';
import options from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/popularMoviesSlice';

    
const usePopularMovies = () => {
    const dispatch = useDispatch();
            const fetchPopularMovies = async() => {
                const res = await fetch('https://api.themoviedb.org/3/movie/popular', options);
                const movies = await res.json();
                dispatch(addPopularMovies(movies));
            };
            useEffect(()=>{
               fetchPopularMovies();
            }, [])
}
export default usePopularMovies;