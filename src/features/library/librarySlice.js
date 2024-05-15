//redux slice for library
import { createSlice } from "@reduxjs/toolkit";

export const librarySlice = createSlice({
    name:"library",
    initialState:{
libraries:[]
    },
    reducers:{
        addLibrary:(state,{action,payload})=>{
state.libraries.push(payload)
        }
    }
})
export const {addLibrary} = librarySlice.actions;
export const getLibrary = state => state.library.libraries
export default librarySlice.reducer