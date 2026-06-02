import { useState, useEffect } from "react";
import { getSprite } from "../utils/pokeapi";
import "../styles/Encounter.css";

function Encounter({encounter, onToggle, onDelete}) {
    const {_id, id, pokemon, nickname, location, alive} = encounter;
    const encounterId = _id || id;

    const [sprite, setSprite] = useState(null);

    useEffect(() => {
        getSprite(pokemon).then(url => setSprite(url));
    }, [pokemon]);

    return (
        <div className={`encounter ${alive ? "alive" : "dead"}`}>
            {sprite && <img src={sprite} alt={pokemon} className="encounter-sprite"/>}
            <span className="encounter-pokemon">{pokemon}</span>
            <span className="encounter-nickname">{nickname}</span>
            <span className="encounter-location">{location}</span>
            <button className="toggle-button" onClick={() => onToggle(encounterId)}>
                {alive ? "Alive" : "Dead"}
            </button>
            <button className="delete-button" onClick={() => onDelete(encounterId)}>
                X
            </button>
        </div>
    )

}

export default Encounter;