import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import { addSong,songsReducer,Song,removeSong } from './songs'
import { addArtist,removeArtist,Artist,artistReducer } from './artists';
import { commentsReducer,Comment,fectComments } from './comments';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
const reducer = combineReducers({
    songs:songsReducer,
    artists:artistReducer,
    comments:commentsReducer
})
export default createStore(reducer,compose(applyMiddleware(thunk),composeWithDevTools()))
export {addSong,Song,removeSong,addArtist,removeArtist,Artist,Comment,fectComments}

