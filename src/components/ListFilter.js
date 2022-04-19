import React, { useState } from 'react';

const ListFilter = (props) => {
    const pokemonSaveList = props.pokemonSaveList;
    const setPokemonList = props.setPokemonList;
    const [filterValue, setFilterValue] = useState("");

    const filter = (e) => {
        let val = e.target.value;
        setFilterValue(val);
        setPokemonList(pokemonSaveList.filter((pokemon) => pokemon.name.includes(val)));
    }

    return (
        <input type="text" placeholder="Filtrer ..." value={filterValue} onChange={filter} />
    );
};

export default ListFilter;