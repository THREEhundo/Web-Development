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
    selected,
    setSelected,
    arraysUsed,
    setArraysUsed,
  } = props;

  function newDeck() {
    if (firstGroup !== null && currentScore.current <= 4) {
      return switchPokeView(shuffle(firstGroup.map((x) => x)));
    } else if (firstGroup !== null && currentScore.current <= 9) {
      return switchPokeView(shuffle(secondGroup.map((x) => x)));
    } else if (secondGroup !== null && currentScore.current <= 14) {
      return switchPokeView(shuffle(thirdGroup.map((x) => x)));
    } else if (thirdGroup !== null && currentScore.current <= 19) {
      return switchPokeView(shuffle(fourthGroup.map((x) => x)));
    } else if (fourthGroup !== null && currentScore.current === 20) {
      return <div>You Win!</div>;
    } else {
      return <div>...Loading</div>;
    }
  }
  // function newDeck() {
  //   if (firstGroup !== null && currentScore.current <= 4) {
  //     return switchPokeView(firstGroup.map((x) => x));
  //   } else if (firstGroup !== null && currentScore.current <= 9) {
  //     return switchPokeView(secondGroup.map((x) => x));
  //   } else if (secondGroup !== null && currentScore.current <= 14) {
  //     return switchPokeView(thirdGroup.map((x) => x));
  //   } else if (thirdGroup !== null && currentScore.current <= 19) {
  //     return switchPokeView(fourthGroup.map((x) => x));
  //   } else if (fourthGroup !== null && currentScore.current === 20) {
  //     return <div>You Win!</div>;
  //   } else {
  //     return <div>...Loading</div>;
  //   }
  // }
  const switchDecks = newDeck();

  return (
    <div>
      <h2>
        Current Score: {currentScore.current} | High Score: {highScore.current}
      </h2>
      <ul>{switchDecks}</ul>
    </div>
  );
};

export default TCGBoard;
