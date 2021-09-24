import { useState } from 'react';
import './App.css';
import Main from './components/main/Main';

function App() {

  const [isClicked, setIsClicked] = useState(false);

  const fetchAlbums = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className="App">
      
      {isClicked ? <Main /> : <button onClick={fetchAlbums} className="albums-button" shows>Get albums</button>}
      
    </div>
  );
}

export default App;
