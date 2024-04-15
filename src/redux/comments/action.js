
import { FETCH_COMMENTS_FAILURE,FETCH_COMMENTS_STARTED,FETCH_COMMENTS_SUCCESS } from "./actiontypes";
import { Comment } from "./model";
export const fetchCommentsStarted =()=>{
    return({type:FETCH_COMMENTS_STARTED})
}
export const fetchCommentsSuccess =(comments)=>{
    return({type:FETCH_COMMENTS_SUCCESS,comments})
}
export const fetchCommentsFailure =()=>{
    return({type:FETCH_COMMENTS_FAILURE})
}

export const fectComments =()=>{
    return async(dispatch)=>{
dispatch(fetchCommentsStarted())
return fetch("https://jsonplaceholder.typicode.com/photos")
.then(res=>res.json())
.then(data=>data.map(item =>(new Comment(item))))
.then(comments=> dispatch(fetchCommentsSuccess(comments)))
.catch(err=>dispatch(fetchCommentsFailure(err)))
    }
}
