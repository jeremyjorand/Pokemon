import React from 'react';

const PokemonDetail = (props) => {
    const pokemon = props.pokemon;
    console.log(pokemon);
    const pokemonSpecies = pokemon.pokemonSpecies;
    const pokemonDetail = pokemon.pokemonDetail;
    return (
        <div>
            <h2>{pokemonSpecies && pokemonSpecies.names.find((name) => "fr" == name.language.name).name}</h2>
            <br />
            <img src={pokemonDetail && pokemonDetail.sprites.other.home.front_default} alt={pokemonDetail && pokemonDetail.name} />
            
        </div>
    );
};

export default PokemonDetail;