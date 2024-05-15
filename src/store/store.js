import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/home/homeSlice"
import libraryReducer from "../features/library/librarySlice"
export const store = configureStore({reducer:{
    home:homeReducer,
    library:libraryReducer
}})