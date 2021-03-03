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

  const switchDecks = newDeck();

  return (
    <div>
      <div id="scoreBoard">
        <div id="currentScore">
          <img
            src="https://fontmeme.com/permalink/210302/85e7558e3bc0b2b9b081d06952401a81.png"
            id="currentImg"
            alt="currentScore"
          />
          : {currentScore.current}
        </div>
        <div id="highScore">
          <img
            src="https://fontmeme.com/permalink/210302/34a426d0ccc503a37ea413d14d8ddb10.png"
            id="highImg"
            alt="highScore"
          />
          : {highScore.current}
        </div>
      </div>

      <ul>{switchDecks}</ul>
    </div>
  );
};

export default TCGBoard;
