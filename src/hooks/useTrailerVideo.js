import { useDispatch } from "react-redux";
import options from "../utils/Constants";
import { addTrailerVideo } from "../utils/popularMoviesSlice";
import { useEffect } from "react";

export const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const getTrailerVideo = async() =>{
    const res = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", options);
    const trailers = await res.json();
    if(!trailers) return;
    const trailer = trailers?.results?.filter((video)=> video.type === "Trailer");
    const mainTrailer = trailer.length ? trailer[0] : trailers[0];
    dispatch(addTrailerVideo(mainTrailer));
}
    useEffect(()=>{
    getTrailerVideo()
    }, [])
}
