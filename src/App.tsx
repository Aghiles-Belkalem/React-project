import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from"./components/NavBar";
import { useState } from "react";

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
  

  function App() {
      const [currentIndex, setCurrentIndex] = useState(0);
  return(
  <>
   <NavBar
   currentIndex= {currentIndex}
   pokemonList= {pokemonList}
   setCurrentIndex = {setCurrentIndex} />
   <PokemonCard
   pokemon = {pokemonList[currentIndex]}/>
   </>
)}



export default App
