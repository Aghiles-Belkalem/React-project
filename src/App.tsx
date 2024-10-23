import "./App.css";
import PokemonCard from "./components/PokemonCard";
import React, { useState } from 'react';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
const MyPokemons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPokemon = () => {
    if(currentIndex < pokemonList.length - 1){
      setCurrentIndex(currentIndex + 1);
    }
  };
  const previousPokemon = () => {
    if(currentIndex > 0){
      setCurrentIndex(currentIndex - 1)
    }
  };
  return (

    <figure>
      <figcaption>{pokemonList[currentIndex].name}</figcaption>
      <img src = {pokemonList[currentIndex].imgSrc} alt = {pokemonList[currentIndex].name} />
      <button onClick = {previousPokemon} disabled = {currentIndex === 0}>
          Précédent
        </button>
        <button onClick = {nextPokemon} disabled = {currentIndex === -1}>
          Suivant
        </button>
    </figure>
  );
}
function App() {
  return <MyPokemons />;
}



export default App
