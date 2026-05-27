import { useState, useEffect } from "react";
import { getSprite } from "../utils/pokeapi";
import "../styles/Encounter.css";

function Encounter({encounter, onToggle, onDelete}) {
    const {id, pokemon, location, alive} = encounter;
    const [sprite, setSprite] = useState(null);

    useEffect(() => {
        getSprite(pokemon).then(url => setSprite(url));
    }, [pokemon]);

    return (
        <div className={`encounter ${alive ? "alive" : "dead"}`}>
            {sprite && <img src={sprite} alt={pokemon} className="encounter-sprite"/>}
            <span className="encounter-pokemon">{pokemon}</span>
            <span className="encounter-location">{location}</span>
            <button className="toggle-button" onClick={() => onToggle(id)}>
                {alive ? "Alive" : "Dead"}
            </button>
            <button className="delete-button" onClick={() => onDelete(id)}>
                X
            </button>
        </div>
    )

}

export default Encounter;