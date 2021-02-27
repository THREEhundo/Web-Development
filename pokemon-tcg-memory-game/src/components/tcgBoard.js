import React from "react";

const TCGBoard = (props) => {
  const {
    firstGroup,
    secondGroup,
    thirdGroup,
    fourthGroup,
    switchPokeView,
    currentScore,
    highScore,
  } = props;

  const showGroup =
    firstGroup !== null ? switchPokeView(firstGroup) : <div>...Loading</div>;

  return (
    <div>
      <h2>
        Current Score: {currentScore} | High Score: {highScore}
      </h2>
      <ul>{showGroup}</ul>
    </div>
  );
};

export default TCGBoard;
