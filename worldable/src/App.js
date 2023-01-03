import './App.css';
import axios from 'axios';
import Worlds from './components/worlds';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/v1/worlds';

function getAPIData(){
  return axios.get(API_URL).then((response) => response.data)
}
function App() {
  const [worlds, setWorlds] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setWorlds(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
  <div className="App">
    <h1> Hello </h1>
    <button onClick={setWorlds} type='submit'>
          Change the World
      </button>
      <Worlds worlds={worlds} />
  </div>
  
  );
}

export default App;
