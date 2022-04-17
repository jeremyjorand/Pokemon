import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';

const App = () => {

  const [pokemonList, setPokemonList] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState({});

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((res) => {
        setPokemonList(res.data.results);
      });
  }, [])

  return (
    <div className='main'>
      <div className='detail'>
        <PokemonDetail pokemon={currentPokemon} />
      </div>
      <div className='liste'>
      <PokemonList liste={pokemonList} setPokemon={setCurrentPokemon}/>
      </div>
    </div>
  );
};

export default App;