import {getPokemon} from "../utils/pokeapi";
import {useState, useEffect} from "react";
import StatsOverlay from "./StatsOverlay";
import "../styles/Pokemon.css"

function Pokemon({name}) {
  const [pokemon, setPokemon] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    getPokemon(name).then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) return <p>Loading..</p>;

  return (
    <>
      <div
        className="pokemonWrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="sprite-img">
          <img src={pokemon.sprite} alt={name}></img>
          {isHovered && (
            <StatsOverlay
              name={name}
              types={pokemon.types}
              stats={pokemon.stats}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Pokemon;
