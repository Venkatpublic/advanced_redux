
import { ADD_SONG,REMOVE_SONG } from "./actiontypes";
export const addSong =(song)=>{
    return(
        {type:ADD_SONG,song}
    )
}
export const removeSong =(song)=>{
    return(
        {type:REMOVE_SONG,song}
    )
}