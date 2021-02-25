import React from "react";

const TCGBoard = (props) => {
  return (
    <div>
      <h2>Current Score: 0 | High Score: 0</h2>
      <ul>{props.pokeView}</ul>
    </div>
  );
};

export default TCGBoard;
