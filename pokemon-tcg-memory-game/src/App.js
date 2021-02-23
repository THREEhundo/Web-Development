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
  // const [pokemonCard, setPokemonCard] = useState("");
  const [pokemonArr, setPokemonArr] = useState([]);

  const pushPokemon = function (pokemon) {
    return {
      id: pokemon.id,
      name: pokemon.name,
      img: pokemon.images.small,
    };
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     await fetch(
  //       "https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1 TO 10]"
  //     )
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((pokeTCG) => {
  //         const { data } = pokeTCG;
  //
  //         console.log(data);
  //
  //         // data.forEach(function (pokemon) {
  //         //   setPokemonArr(pushPokemon(pokemon));
  //         // });
  //       });
  //   }
  //   // fetchData();
  // }, [pokemonArr]);

  useEffect(() => {
    fetch(
      "https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1%20TO%20151]&pageSize=20&series:base1"
    )
      .then((res) => {
        return res.json();
      })
      .then((pokeTCG) => {
        const { data } = pokeTCG;

        return console.log(data);

        // data.forEach(function (pokemon) {
        //   setPokemonArr(pushPokemon(pokemon));
        // });
      })
      .catch((error) => {
        console.log("Error Code: ", error.code);
        console.log("Error: ", error);
      });
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
      <img id="poke1" alt="pokemonCard"></img>
    </div>
  );
};

export default App;
