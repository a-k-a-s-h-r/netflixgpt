import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: 'toggleGptSearch',
    initialState: {
        toggleGptSearch: false,
        gptSuggestedMovies: null,
        tmdbRecommended: null
    },
    reducers: {
        toggleGptSearchSlice: (state, action)=>{
            state.toggleGptSearch = !state.toggleGptSearch;
        },
        updateMoviesToSlice: (state, action) => {
            const {gptMovies, tmdbRecommended} = action.payload;
            state.gptSuggestedMovies = gptMovies;
            state.tmdbRecommended = tmdbRecommended;

        }
    }
})

export default gptSearchSlice.reducer;
export const {toggleGptSearchSlice, updateMoviesToSlice} = gptSearchSlice.actions;