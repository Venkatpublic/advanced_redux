
import './App.css';
import PlayList from './screens/playlist';
import Artists from "./screens/artists"

import Profile from './screens/profile';
import Patches from './screens/patches';
import { useEffect } from 'react';
import {enablePatches} from "immer"

function App() {
  enablePatches()
  return (
    <div style={{display:'flex',flexDirection:'row'}} className="App" >
     <Patches></Patches>
    {/* <PlayList ></PlayList>
    <Artists></Artists> */}
    </div>
  );
}

export default App;
