import {createStore,combineReducers} from 'redux'
import { addSong,songsReducer,Song,removeSong } from './songs'
import { addArtist,removeArtist,Artist,artistReducer } from './artists';
import { commentsReducer,Comment } from './comments';
import { composeWithDevTools } from '@redux-devtools/extension';
const reducer = combineReducers({
    songs:songsReducer,
    artists:artistReducer,
    comments:commentsReducer
})
export default createStore(reducer,composeWithDevTools())
export {addSong,Song,removeSong,addArtist,removeArtist,Artist,Comment}

