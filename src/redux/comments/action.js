import { type } from "@testing-library/user-event/dist/type";
import { FETCH_COMMENTS_FAILURE,FETCH_COMMENTS_STARTED,FETCH_COMMENTS_SUCCESS } from "./actiontypes";

export const fetchCommentsStarted =()=>{
    return({type:FETCH_COMMENTS_STARTED})
}
export const fetchCommentsSuccess =(comments)=>{
    return({type:FETCH_COMMENTS_SUCCESS,comments})
}
export const fetchCommentsFailure =()=>{
    return({type:FETCH_COMMENTS_FAILURE})
}
