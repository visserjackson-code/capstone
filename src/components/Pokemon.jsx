import {getPokemon} from "../utils/pokeapi";
import {useState, useEffect} from "react";
import StatsOverlay from "./StatsOverlay";
import "../styles/Pokemon.css";


//renders a pokemon, which then gets used by Slot.jsx
function Pokemon({name}) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getPokemon(name).then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) return <p>Loading..</p>;

  return (
    <>
      <div className="pokemon-wrapper">
        <img src={pokemon.sprite} alt={name} />
        {/* stats overlay is always rendered, but only shows on hover thanks to css */}
        <StatsOverlay name={name.toUpperCase()} types={pokemon.types} stats={pokemon.stats} />
      </div>
    </>
  );
}

export default Pokemon;
