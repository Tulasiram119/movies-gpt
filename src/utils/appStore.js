import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils//userSlice";
import movieReducer from "../utils/moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import stateSlice from "./stateSlice";
const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies:movieReducer,
        gpt:gptReducer,
        config:configReducer,
        series:stateSlice
    }
});

export default appStore;