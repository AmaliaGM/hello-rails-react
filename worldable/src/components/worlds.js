import React from 'react'

function Worlds(props) {
  return (
    <div> 
      <h1>These greetings are from API</h1>
      {props.worlds.map((world) => {
        return (
          <div key={world.id}>
            <p>{world.title}</p>
            <h2>{world.body}</h2>
          </div>
      );
    })}
  </div>
  );
}

export default Worlds;
