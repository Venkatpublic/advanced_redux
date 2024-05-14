//redux slice for home
import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name:"home",
    initialState:{
        recommendations:[]
    },
    reducers:{
setRecommendations: (state,action) => {
    state.recommendations = action.payload
},
    }
})
export const {setRecommendations} = homeSlice.actions
export const getRecommedationsApi = data => dispatch =>{
    setTimeout(()=>{
        dispatch(setRecommendations(data))
    },5000)
}
export const recommendations = state => state.home.recommendations

export default homeSlice.reducer