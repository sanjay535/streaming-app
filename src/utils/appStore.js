import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import movieReducer from './movieSlice';
import playerReducer from './playerSlice'

export const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        player:playerReducer
    }
});