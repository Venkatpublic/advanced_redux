
import './App.css';
import PlayList from './screens/playlist';
import Artists from "./screens/artists"
function App() {
  return (
    <div style={{display:'flex',flexDirection:'row'}} className="App" >
    <PlayList ></PlayList>
    <Artists></Artists>
    </div>
  );
}

export default App;
