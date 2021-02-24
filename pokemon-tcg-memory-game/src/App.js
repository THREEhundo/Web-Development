import "./App.css";
import React, { useState, useEffect } from "react";

// grab image, name
// create function that grabs random cards from array
// after 10 correct clicks -> show new set
// show & update score
// save new high score
// cards cannot be repeated

const App = (props) => {
  let pickedCards = [];
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

  const pokedexCopy = pokedex;

  function splitAndShuffle(array) {
    let splitArr;
    if (pokedex !== null) {
      const shuffled = array.sort(() => 0.5 - Math.random());
      const first = shuffled.slice(0, 5);
      const second = shuffled.slice(5, 10);
      const third = shuffled.slice(10, 15);
      const fourth = shuffled.slice(15, 19);
      splitArr = [first, second, third, fourth];
    }
    console.log(splitArr);
    return splitArr;
  }

  splitAndShuffle(pokedexCopy);

  const pokeView =
    pokedex !== null ? (
      splitAndShuffle(pokedexCopy).map((pokemonGroup) => {
        return pokemonGroup.map((pokemon) => (
          <li key={pokemon.id} id={pokemon.id}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.img} alt="card"></img>
          </li>
        ));
      })
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
