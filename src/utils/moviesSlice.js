import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:{},
        popularMovies:{},
        trailerVedio: null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailerVedio = action.payload;
        }
    }

})
 export default moviesSlice.reducer;
 export const{addNowPlayingMovies,addTrailer,addPopularMovies} = moviesSlice.actions;