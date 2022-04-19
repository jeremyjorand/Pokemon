import axios from 'axios';
import React from 'react';

const GenerationList = (props) => {
    const generationList = props.generationList;
    const setPokemonList = props.setPokemonList;
    const setPokemonSaveList = props.setPokemonSaveList;

    const changeGeneration = (generation) => {
        axios.get(generation.url).then((res) => {
            let pokemons = res.data.pokemon_species;
            setPokemonList(pokemons);
            setPokemonSaveList(pokemons);
        });
    }

    return (
        <div className='generation-list'>
            <ul>
                {generationList.map((generation, index) =>
                    <li key={index} onClick={() => changeGeneration(generation)}> {generation.name}</li>)}
            </ul>
        </div>
    );
};

export default GenerationList;