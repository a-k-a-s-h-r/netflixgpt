import { useEffect } from 'react';
import options from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/popularMoviesSlice';

    
const usePopularMovies = () => {
    const popularMovies = useSelector((store) => store?.movies?.popularMovies?.results);
    const dispatch = useDispatch();
            const fetchPopularMovies = async() => {
                const res = await fetch('https://api.themoviedb.org/3/movie/popular', options);
                const movies = await res.json();
                dispatch(addPopularMovies(movies));
            };
            useEffect(()=>{
              !popularMovies && fetchPopularMovies();
            }, [])
}
export default usePopularMovies;