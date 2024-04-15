import { type } from "@testing-library/user-event/dist/type";
import { ADD_ARTIST,REMOVE_ARTIST } from "./actionTypes";
export const addArtist =(artist)=>{
    return {type:ADD_ARTIST,artist}
}
export const removeArtist =(artist)=>{
    return {type:REMOVE_ARTIST,artist}
}