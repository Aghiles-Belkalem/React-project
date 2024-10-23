interface pokemonProps{
    name: string,
    imgSrc?: string,
}

function PokemonCard ({pokemon}: { pokemon: pokemonProps }) {
  return pokemon.imgSrc ?
 (<figure><img src={pokemon.imgSrc} alt= {pokemon.name} />
     <figcaption>{pokemon.name}</figcaption>
    </figure>) : (<><p>????</p> <figcaption>{pokemon.name}</figcaption></>);
    
   
}


export default PokemonCard