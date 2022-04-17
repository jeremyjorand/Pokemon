import axios from 'axios';
import React from 'react';

const PokemonList = (props) => {
    const pokemonList = props.liste;
    const setCurrentPokemon = props.setPokemon;
    const getPokemon = (pokemon) => {
        axios.get(pokemon.url).then(
            (res)=>{
                setCurrentPokemon(res.data)
                console.log(res.data);}
        );
    };

    return (
        <ul>
            {pokemonList.map((pokemon, index) => <li key={index} onClick={() => {getPokemon(pokemon)}}>{pokemon.name}</li>)}
        </ul>
    );
};

export default PokemonList;