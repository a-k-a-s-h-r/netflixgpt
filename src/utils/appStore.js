import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import popularMovies from "./popularMoviesSlice";
import nowPlayingSlice from "./nowPlayingSlice";
import topRatedSlice from "./topRatedSlice";
import gptSearchSlice from "./gptSearchSlice";

const appStore = configureStore({
    reducer:{
        user: userSlice,
        movies: popularMovies,
        nowPlayingMovies: nowPlayingSlice,
        topRated: topRatedSlice,
        toggleGptSearchSlice: gptSearchSlice
    }
})

export default appStore;