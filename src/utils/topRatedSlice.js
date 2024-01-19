import { createSlice } from "@reduxjs/toolkit";

const topRatedSlice = createSlice({
    name: 'topRated',
    initialState: {
        topRatedMovies: [],
        movieTrailer: []
    },
    reducers: {
        addTopRatedMovies: (state, action)=>{
            state.topRatedMovies = action.payload;
        },
        removeTopRatedMovies: (state, action) => {
            return null;
        },
        addTrailerVideo: (state, action) =>{
            state.movieTrailer = action.payload;
        }
    }
})

export default topRatedSlice.reducer;
export const {addTopRatedMovies, removeTopRatedMovies, addTrailerVideo} = topRatedSlice.actions;