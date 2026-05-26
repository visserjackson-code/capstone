import { getPokemon } from "../utils/pokeapi";
import { useState, useEffect } from "react";


function Pokemon ({name}) {

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        getPokemon(name).then(data => setPokemon(data));
    }, [name]);

    if (!pokemon) return <p>Loading..</p>
    return (
        <>
        <div className="sprite-img">
            <img src={pokemon.sprite} alt={name}></img>
        </div>
        </>
    )
}

export default Pokemon;