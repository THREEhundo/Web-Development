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

    async function fetchData() {
      try {
        const url =
          "https://api.pokemontcg.io/v2/cards?q=set.series:base&nationalPokedexNumbers:[1%20TO%20151]&pageSize=20";

        const fetched = await fetch(url);
        const res = await fetched.json();
        const parsed = parseData(res);
        setPokedex(parsed);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    // let splitArr, shuffled;
    function shuffleSplit(array) {
      // if (pokedex !== null) {
      const arrayCopy = Array.from(array);
      const shuffled = arrayCopy.sort(() => 0.5 - Math.random());

      const first = shuffled.slice(0, 5);
      const second = shuffled.slice(5, 10);
      const third = shuffled.slice(10, 15);
      const fourth = shuffled.slice(15, 19);
      // setFirstGroup("first");
      // setSecondGroup(second);
      // setThirdGroup(third);
      // setFourthGroup(fourth);
      // console.log(first);
      // }
      const splitArr = [first, second, third, fourth];
      return splitArr;
    }
    if (pokedex !== null) {
      // const pokedexCopy = Array.from(pokedex);
      const split = shuffleSplit(pokedex);
      setFirstGroup(split[0]);
      console.log(firstGroup);
    }
    // let split1;
    // if (pokedex !== null) {
    //   const sets = shuffleSplit(pokedexCopy);
    //   split1 = sets[0];
    // }
  }, []);
  // console.log(firstGroup);
  // const handleClick = (e) => {
  // make sure card is not clicked twice
  // resort the array
  // when all cards are correctly clicked once change to next array
  // split1.sort(() => 0.5 - Math.random())
  // };

  const pokeView =
    pokedex !== null ? (
      pokedex.map((pokemon) => (
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
      <TCGBoard pokeView={pokeView} />
      {/* <ul>{pokeView}</ul> */}
    </div>
  );
};

export default App;
