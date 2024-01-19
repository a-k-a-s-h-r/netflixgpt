import { useEffect } from 'react';
import options from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/topRatedSlice';

    
const useTopRatedMovies = () => {
    const dispatch = useDispatch();
            const fetchTopRatedMovies = async() => {
                const res = await fetch('https://api.themoviedb.org/3/movie/top_rated', options);
                const movies = await res.json();
                dispatch(addTopRatedMovies(movies));
            };
            useEffect(()=>{
                fetchTopRatedMovies();
            }, [])
}
export default useTopRatedMovies;