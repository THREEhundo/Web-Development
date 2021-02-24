import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";

/*
// grab image, name
// create function that grabs random cards from array
// Set banner

*/
// after 10 correct clicks -> show new set
// show & update score
// save new high score
// cards cannot be repeated
// https://api.pokemontcg.io/v2/sets?q=id:base1&images.symbol
const App = (props) => {
  const [pokedex, setPokedex] = useState(null);
  const [headerImg, setHeaderImg] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url = "https://api.pokemontcg.io/v2/sets?q=id:base1&images.symbol";

      await fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const { symbol } = data.data[0].images;
          setHeaderImg(symbol);
        });
    }

    fetchData();
  }, []);

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

  function shuffleSplit(array) {
    let splitArr;
    if (pokedex !== null) {
      const shuffled = array.sort(() => 0.5 - Math.random());
      const first = shuffled.slice(0, 5);
      const second = shuffled.slice(5, 10);
      const third = shuffled.slice(10, 15);
      const fourth = shuffled.slice(15, 19);
      splitArr = [first, second, third, fourth];
    }
    return splitArr;
  }
  let split1;
  if (pokedex !== null) {
    const pokedexCopy = pokedex;
    const sets = shuffleSplit(pokedexCopy);
    split1 = sets[0];
  }

  const pokeView =
    pokedex !== null ? (
      split1.map((pokemon) => (
        <li key={pokemon.id} id={pokemon.id}>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.img} alt="card"></img>
        </li>
      ))
    ) : (
      <div>...Loading</div>
    );

  const banner = headerImg !== null ? { headerImg } : <div>Pokemon TCG</div>;

  return (
    <div className="App">
      <Header banner={banner} />
      <ul>{pokeView}</ul>
    </div>
  );
};

export default App;
