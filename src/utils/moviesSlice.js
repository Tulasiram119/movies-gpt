import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:{},
        trailerVedio: null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailerVedio = action.payload;
        }
    }

})
 export default moviesSlice.reducer;
 export const{addNowPlayingMovies,addTrailer} = moviesSlice.actions;