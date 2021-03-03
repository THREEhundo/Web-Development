import "./App.css";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Header from "./components/Header";
import TCGBoard from "./components/TCGBoard";

/*
// grab image, name
// create function that grabs random cards from array
// Set banner
// after 10 correct clicks -> show new set
// show & update score
// save new high score
// cards cannot be repeated

*/
// Make pokedex size bigger

const App = (props) => {
  const [headerImg, setHeaderImg] = useState(null);
  const [pokedex, setPokedex] = useState(null);
  const [firstGroup, setFirstGroup] = useState(null);
  const [secondGroup, setSecondGroup] = useState(null);
  const [thirdGroup, setThirdGroup] = useState(null);
  const [fourthGroup, setFourthGroup] = useState(null);
  const [fifthGroup, setFifthGroup] = useState(null);
  const [sixthGroup, setSixthGroup] = useState(null);
  const [seventhGroup, setSeventhGroup] = useState(null);
  const [eighthGroup, setEightGroup] = useState(null);
  const [ninthGroup, setNinthGroup] = useState(null);
  const [tenthGroup, setTenthGroup] = useState(null);
  const [selected, setSelected] = useState([]);
  const currentScore = useRef(0);
  const highScore = useRef(0);

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

  function shuffle(data) {
    return data.sort(() => 0.5 - Math.random());
  }

  function splitter(array) {
    setFirstGroup(array.slice(0, 10));
    setSecondGroup(array.slice(10, 20));
    setThirdGroup(array.slice(20, 30));
    setFourthGroup(array.slice(30, 40));
  }

  function splitData(array) {
    let groups = [
      setFirstGroup,
      setSecondGroup,
      setThirdGroup,
      setFourthGroup,
      setFifthGroup,
      setSixthGroup,
      setSeventhGroup,
      setEightGroup,
      setNinthGroup,
      setTenthGroup,
    ];

    for (let i = 0; i < groups.length; i++) {
      groups[i](array.slice(0, 10));
    }
    return groups;
  }

  useEffect(() => {
    function parseData(res) {
      const { data } = res;

      let unique = data.reduce((res, itm) => {
        let result = res.find(
          (item) => JSON.stringify(item.name) === JSON.stringify(itm.name)
        );
        if (!result) return res.concat(itm);
        return res;
      }, []);
      const allUnique = unique.splice(0, 100);

      return allUnique.map((pokemon) => {
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
          "https://api.pokemontcg.io/v2/cards?q=set.series:base&nationalPokedexNumbers:[1%20TO%20151]&pageSize=250";

        const fetched = await fetch(url);
        const res = await fetched.json();
        const parsed = parseData(res);
        const shuffled = shuffle(parsed);
        setPokedex(shuffled);
        splitter(shuffled);
        splitData(shuffled);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    fetchData();
  }, []);

  const handleClick = useCallback(
    (e) => {
      const handleClick = (e) => {
        const { parentNode } = e.target;
        const { id } = parentNode;

        if (selected.includes(id)) {
          // reset score
          currentScore.current = 0;
          setSelected([]);
          // refresh view
          const copiedPokedex = shuffle(pokedex.map((x) => x));
          setPokedex(copiedPokedex);
          splitter(copiedPokedex);
          // disallow multiple clicks on same item after if it's back to back
        } else {
          setSelected([...selected, id]);
          currentScore.current = currentScore.current + 1;
          if (highScore.current === currentScore.current - 1) {
            highScore.current = highScore.current + 1;
          }
        }
      };
      handleClick(e);
    },
    [pokedex, selected]
  );

  const switchPokeView = (pokeSet) => {
    return pokeSet.map((pokemon) => (
      <li key={pokemon.id} id={pokemon.id} onClick={handleClick}>
        <img src={pokemon.img} alt="card"></img>
      </li>
    ));
  };

  return (
    <div className="App">
      <Header headerImg={headerImg} />
      <TCGBoard
        switchPokeView={switchPokeView}
        firstGroup={firstGroup}
        secondGroup={secondGroup}
        thirdGroup={thirdGroup}
        fourthGroup={fourthGroup}
        onClick={handleClick}
        currentScore={currentScore}
        highScore={highScore}
        shuffle={shuffle}
        selected={selected}
      />
    </div>
  );
};

export default App;
