import React from "react";

const TCGBoard = (props) => {
  const {
    firstGroup,
    secondGroup,
    thirdGroup,
    fourthGroup,
    switchPokeView,
  } = props;
  return (
    <div>
      <h2>Current Score: 0 | High Score: 0</h2>
      <ul>{switchPokeView(firstGroup)}</ul>
    </div>
  );
};

export default TCGBoard;