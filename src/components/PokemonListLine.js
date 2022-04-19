import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonListLine = (props) => {
    const pokemon = props.pokemon;
    const pokemonList = props.pokemonList;
    const getPokemon = props.getPokemon;
    const [pokemonSpecies, setPokemonSpecies] = useState("")
    const [pokemonDetail, setPokemonDetail] = useState({})
    useEffect(() => {
        axios.get(pokemon.url).then((res) => {
            setPokemonSpecies(res.data);
            //console.log(res.data)
            let variety = res.data.varieties.find((variety) => variety.is_default);
            // console.log(variety);
            axios.get(variety.pokemon.url).then((res) => setPokemonDetail(res.data))
        })
    }, [pokemonList]);

    return (
        <li key={pokemonSpecies.id} onClick={() => { getPokemon({ pokemonDetail, pokemonSpecies}) }}>
            <img className="thumbs" src={pokemonDetail.sprites && pokemonDetail.sprites.front_default}
                alt={pokemonSpecies.names && pokemonSpecies.names.find((name) => "fr" == name.language.name).name} />
            &nbsp;{pokemonSpecies.names && pokemonSpecies.names.find((name) => "fr" == name.language.name).name}</li>
    );
};

export default PokemonListLine;