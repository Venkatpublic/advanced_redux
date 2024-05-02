
import './App.css';
import PlayList from './screens/playlist';
import Artists from "./screens/artists"

import Profile from './screens/profile';
import { useEffect } from 'react';

function App() {
  return (
    <div style={{display:'flex',flexDirection:'row'}} className="App" >
      <Profile></Profile>
    {/* <PlayList ></PlayList>
    <Artists></Artists> */}
    </div>
  );
}

export default App;
