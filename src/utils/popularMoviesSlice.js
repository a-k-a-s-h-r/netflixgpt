import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
    name: 'popularMovies',
    initialState: {
        popularMovies: [],
        movieTrailer: []
    },
    reducers: {
        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },
        removePopularMovies: (state, action) => {
            return null;
        },
        addTrailerVideo: (state, action) =>{
            state.movieTrailer = action.payload;
        }
    }
})

export default popularMoviesSlice.reducer;
export const {addPopularMovies, removePopularMovies, addTrailerVideo} = popularMoviesSlice.actions;