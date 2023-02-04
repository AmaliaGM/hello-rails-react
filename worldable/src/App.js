import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/v1/worlds';

function getAPIData(){
  return axios.get(API_URL).then((response) => response.data)
}
function App() {
  const [worlds, setWorlds] = useState({
    title: "greeting1",
    body: "Hello World"
  });

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
    <p>{worlds.body}</p>

    <button onClick={() => 
      setWorlds(
        worlds[parseInt(Math.random() * worlds.length)],
        window.location.reload(),
      )
      }>
          Change the World
      </button>
  </div>
  
  );
}

export default App;
