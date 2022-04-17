import React from 'react';

const PokemonDetail = (props) => {
    const pokemon = props.pokemon;
    return (
        <div>
            <h2>{pokemon.name}</h2>
            <br />
            <img src={pokemon.sprites && pokemon.sprites.other.home.front_default} alt={pokemon.name} />
            
        </div>
    );
};

export default PokemonDetail;