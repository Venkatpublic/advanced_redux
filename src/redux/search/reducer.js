import { SEARCH_SONG } from "./actiontypes";
const initialstate = ''
export const searchReducer =(state=initialstate,{type,keyword})=>{
    switch(type){
        case(SEARCH_SONG):
        return keyword
        default:
           return state 

    }
}