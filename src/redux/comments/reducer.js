import { FETCH_COMMENTS_FAILURE,FETCH_COMMENTS_STARTED,FETCH_COMMENTS_SUCCESS } from "./actiontypes";
const initialstate = {
    isLoading:false,
    comments:[],
    isError:false
}
export const commentsReducer = (state=initialstate,payload)=>{
switch(payload.type){
    case(FETCH_COMMENTS_STARTED):
    return( {...state,isLoading:true})
    case(FETCH_COMMENTS_SUCCESS):
    return( {comments:payload.comments,isLoading:false,isError:false})
    case(FETCH_COMMENTS_FAILURE):
    return( {...state,isLoading:false,isError:true})
    default:
        return state
}
}