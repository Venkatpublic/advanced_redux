import { type } from "@testing-library/user-event/dist/type";
import { SEARCH_SONG } from "./actiontypes";
export const searchSong =(keyword)=>{
    return({type:SEARCH_SONG,keyword})
}