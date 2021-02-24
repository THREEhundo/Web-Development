import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

// grab image, name
// create function that grabs random cards from array
// after 10 correct clicks -> show new set
// show & update score
// save new high score
// cards cannot be repeated

const App = (props) => {
  const [pokedex, setPokedex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url =
        "https://api.pokemontcg.io/v2/cards?q=set.series:base&nationalPokedexNumbers:[1%20TO%20151]&pageSize=20";

      await fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((pokeTCG) => {
          const { data } = pokeTCG;
          console.log(data);
          const cards = data.map((pokemon) => {
            const card = {
              id: pokemon.id,
              name: pokemon.name,
              img: pokemon.images.small,
            };
            return card;
          });
          setPokedex(cards);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }

    fetchData();
  }, []);

  const pokeView =
    pokedex !== null ? (
      pokedex.map((pokemon) => (
        <li key={pokemon.id} id={pokemon.name}>
          <img src={pokemon.img} alt="card"></img>
          <h1>{pokemon.name}</h1>
        </li>
      ))
    ) : (
      <div>...Loading</div>
    );

  return (
    <div className="App">
      <ul>{pokeView}</ul>
    </div>
  );
};

export default App;
