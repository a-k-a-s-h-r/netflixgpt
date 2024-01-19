import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import popularMovies from "./popularMoviesSlice";
import nowPlayingSlice from "./nowPlayingSlice";
import topRatedSlice from "./topRatedSlice";

const appStore = configureStore({
    reducer:{
        user: userSlice,
        movies: popularMovies,
        nowPlayingMovies: nowPlayingSlice,
        topRated: topRatedSlice
    }
})

export default appStore;