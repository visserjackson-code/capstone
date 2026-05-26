import {getPokemon} from "../utils/pokeapi";
import {useState, useEffect} from "react";
import StatsOverlay from "./StatsOverlay";
import "../styles/Pokemon.css";

function Pokemon({name}) {
  const [pokemon, setPokemon] = useState(null);
  //   const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    getPokemon(name).then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) return <p>Loading..</p>;

  return (
    <>
      <div className="pokemon-wrapper">
        <img src={pokemon.sprite} alt={name} />
        <StatsOverlay name={name} types={pokemon.types} stats={pokemon.stats} />
      </div>
    </>
  );
}

export default Pokemon;
