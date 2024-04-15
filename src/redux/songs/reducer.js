import { ADD_SONG,REMOVE_SONG } from "./actiontypes"
const initialstate = []
export const songsReducer =(state=initialstate,{type,song})=>{
switch(type){
    case (ADD_SONG):
        return [...state,song]
    case (REMOVE_SONG):
        return state.filter(({id})=>(id !== song.id))
    default:
        return  state
}
}