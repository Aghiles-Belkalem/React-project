

interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }


  function NavBar({currentIndex, setCurrentIndex, pokemonList}: NavBarProps){
  
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
        <nav>
        <button type='button' onClick= {previousPokemon} disabled = {currentIndex === 0}>
        Précédent
      </button>
      <button type ='button' onClick= {nextPokemon} disabled = {currentIndex === -1}>
        Suivant
      </button>
      </nav>
       );
    }

    export default NavBar;