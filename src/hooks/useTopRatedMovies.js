import { useEffect } from 'react';
import options from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../utils/topRatedSlice';

    
const useTopRatedMovies = () => {
    const topRated = useSelector((store) => store?.movies?.topRatedMovies?.results);

    const dispatch = useDispatch();
            const fetchTopRatedMovies = async() => {
                const res = await fetch('https://api.themoviedb.org/3/movie/top_rated', options);
                const movies = await res.json();
                dispatch(addTopRatedMovies(movies));
            };
            useEffect(()=>{
               !topRated && fetchTopRatedMovies();
            }, [])
}
export default useTopRatedMovies;