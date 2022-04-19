import axios from 'axios';
import React from 'react';
import ListFilter from './ListFilter';
import PokemonListLine from './PokemonListLine';

const PokemonList = (props) => {
    const pokemonList = props.liste;
    const pokemonSaveList = props.saveListe;
    const setCurrentPokemon = props.setPokemon;
    const setPokemonList = props.setPokemonList;
    const getPokemon = (pokemon) => {
        //console.log(pokemon)
        setCurrentPokemon(pokemon)
        // axios.get(pokemon.url).then(
        //     (res) => {
        //         setCurrentPokemon(res.data)
        //     }
        // );
    };

    return (
        <div>
            <ListFilter pokemonSaveList={pokemonSaveList} setPokemonList={setPokemonList} />
            <ul>
                {pokemonList.map((pokemon, index) => <PokemonListLine pokemon={pokemon} getPokemon={getPokemon} pokemonList={pokemonList} index={index} />)}
            </ul>
        </div>
    );
};

export default PokemonList;