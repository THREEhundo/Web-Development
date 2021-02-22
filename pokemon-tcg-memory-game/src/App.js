import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

// grab image, name
// create function that grabs random cards from array
// after 10 correct clicks -> show new set
// show & update score
// save new high score
// cards cannot be repeated

//

const App = (props) => {
  const [pokemonCard, setPokemonCard] = useState("");

  useEffect(() => {
    fetch(
      "https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1 TO 151]"
    )
      .then((res) => {
        return res.json();
      })
      .then((pokeTCG) => {
        const { data } = pokeTCG;
        setPokemonCard(data[0].images.small);
      });
  });

  console.log(pokemonCard);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <img id="poke1" src={pokemonCard} alt="pokemonCard"></img>
    </div>
  );
};

export default App;
