import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const App = (props) => {
  // const POKEMON_URL = "https://api.pokemontcg.io/v2/cards"
  // const pokemonAPI = d047a3ba-5c74-4582-b1f1-6f96057d5b48
  // loadJSON("https://api.pokemontcg.io/v2/cards/d047a3ba-5c74-4582-b1f1-6f96057d5b48")

  // fetch("https://api.pokemontcg.io/v2/cards", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({})
  // })

  // fetch("https://api.pokemontcg.io/v2/sets?q=series:Base")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((pokeTCG) => {
  //     const { data } = pokeTCG;
  //     console.log(pokeTCG);
  //   });

  // nationalPokedexNumbers:[1 TO 151]

  fetch(
    "https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1 TO 151]"
  )
    .then((res) => {
      return res.json();
    })
    .then((pokeTCG) => {
      console.log(pokeTCG);
    });

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
      {/* <div>{pokemon}</div> */}
    </div>
  );
};

export default App;
