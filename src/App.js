import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import GenerationList from './components/GenerationList';

const App = () => {

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonSaveList, setPokemonSaveList] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [generationList, setGenerationList] = useState([]);

  useEffect(() => {
    // axios.get("https://pokeapi.co/api/v2/pokemon?limit=150")
    //   .then((res) => {
    //     setPokemonList(res.data.results);
    //     setPokemonSaveList(res.data.results);
    //   });
    axios.get("https://pokeapi.co/api/v2/generation")
      .then((res) => {
        setGenerationList(res.data.results);
      });
      
  }, [])

  return (
    <div className='main'>
      <div className="header">
        <GenerationList generationList={generationList} setPokemonList={setPokemonList} setPokemonSaveList={setPokemonSaveList} />
      </div>
      <div className="body">
        <div className='detail'>
          <PokemonDetail pokemon={currentPokemon} />
        </div>
        <div className='liste'>
          <PokemonList liste={pokemonList} saveListe={pokemonSaveList} setPokemon={setCurrentPokemon} setPokemonList={setPokemonList} />
        </div>
      </div>
    </div>
  );
};

export default App;