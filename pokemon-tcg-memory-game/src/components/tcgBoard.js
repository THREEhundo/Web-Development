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
    shuffle,
  } = props;

  const showGroup =
    firstGroup !== null ? (
      switchPokeView(shuffle(firstGroup))
    ) : (
      <div>...Loading</div>
    );

  return (
    <div>
      <h2>
        Current Score: {currentScore.current} | High Score: {highScore.current}
      </h2>
      <ul>{showGroup}</ul>
    </div>
  );
};

export default TCGBoard;
