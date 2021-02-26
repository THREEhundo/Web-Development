import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TCGBoard from "./components/TCGBoard";

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
  const [headerImg, setHeaderImg] = useState(null);
  const [pokedex, setPokedex] = useState(null);
  const [firstGroup, setFirstGroup] = useState(null);
  const [secondGroup, setSecondGroup] = useState(null);
  const [thirdGroup, setThirdGroup] = useState(null);
  const [fourthGroup, setFourthGroup] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    function grabHeader(data) {
      const { symbol } = data.data[0].images;
      setHeaderImg(symbol);
    }

    async function fetchData() {
      try {
        const url =
          "https://api.pokemontcg.io/v2/sets?q=id:base1&images.symbol";

        const data = await fetch(url);
        const res = await data.json();
        grabHeader(res);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    function parseData(res) {
      const { data } = res;

      return data.map((pokemon) => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          img: pokemon.images.small,
        };
      });
    }

    function shuffleSplit(array) {
      const first = array.slice(0, 5);
      const second = array.slice(5, 10);
      const third = array.slice(10, 15);
      const fourth = array.slice(15, 20);

      const splitArr = [first, second, third, fourth];
      return splitArr;
    }

    async function fetchData() {
      try {
        const url =
          "https://api.pokemontcg.io/v2/cards?q=set.series:base&nationalPokedexNumbers:[1%20TO%20151]&pageSize=20";

        const fetched = await fetch(url);
        const res = await fetched.json();
        const parsed = parseData(res);
        const shuffled = parsed.sort(() => 0.5 - Math.random());
        setPokedex(shuffled);
        const split = shuffleSplit(shuffled);
        setFirstGroup(split[0]);
        setSecondGroup(split[1]);
        setThirdGroup(split[2]);
        setFourthGroup(split[3]);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    fetchData();
  }, []);

  const switchPokeView = (pokeSet) => {
    return pokedex !== null ? (
      pokeSet.map((pokemon) => (
        <li key={pokemon.id} id={pokemon.id}>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.img} alt="card"></img>
        </li>
      ))
    ) : (
      <div>...Loading</div>
    );
  };

  const banner = headerImg !== null ? { headerImg } : <div>Pokemon TCG</div>;

  return (
    <div className="App">
      <Header banner={banner} />
      <TCGBoard
        switchPokeView={switchPokeView}
        firstGroup={firstGroup}
        secondGroup={secondGroup}
        thirdGroup={thirdGroup}
        fourthGroup={fourthGroup}
      />
    </div>
  );
};

export default App;
