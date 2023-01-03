import React from 'react'

function Worlds(props) {
  return (
    <div> 
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
