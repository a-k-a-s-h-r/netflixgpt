import { createSlice } from "@reduxjs/toolkit";

const nowPlayingSlice = createSlice({
    name: 'nowPlaying',
    initialState: {
        nowPlaying: [],
        movieTrailer: []
    },
    reducers: {
        addNowPlayingMovies: (state, action)=>{
            state.nowPlaying = action.payload;
        },
        removeNowPlayingMovies: (state, action) => {
            return null;
        },
        addTrailerVideo: (state, action) =>{
            state.movieTrailer = action.payload;
        }
    }
})

export default nowPlayingSlice.reducer;
export const {addNowPlayingMovies, removeNowPlayingMovies, addTrailerVideo} = nowPlayingSlice.actions;