import { ADD_ARTIST,REMOVE_ARTIST } from "./actionTypes";
const initialstate = []
export const artistReducer =(state = initialstate,artist)=>{
switch(artist.type){
    case (ADD_ARTIST):
        return [...state,artist.artist]
    case (REMOVE_ARTIST):
        return state.filter(({id})=>(id !== artist.artist.id))

     default    :
     return state

}
}