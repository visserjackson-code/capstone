import { useState, useEffect } from "react";
import { getSprite } from "../utils/pokeapi";
import "../styles/Encounter.css";


//displays a single nuzlocke encounter as a card with sprite, details, and actin buttons
//recieves encounter object and handler functions from Nuzlocke.jsx
function Encounter({encounter, onToggle, onDelete}) {

    const {_id, id, pokemon, nickname, location, alive} = encounter;
    // _id is for MongoDB, id is for locally logged encounters
    const encounterId = _id || id;

    const [sprite, setSprite] = useState(null);

    //fetches sprite when component mounts or when pokémon name changes
    useEffect(() => {
        getSprite(pokemon).then(url => setSprite(url));
    }, [pokemon]);

    return (
        //dynamically apply "alive" or "dead" class to control styling
        <div className={`encounter ${alive ? "alive" : "dead"}`}>
            {sprite && <img src={sprite} alt={pokemon} className="encounter-sprite"/>}
            <span className="encounter-pokemon">{pokemon}</span>
            <span className="encounter-nickname">{nickname}</span>
            <span className="encounter-location">{location}</span>
            {/* toggle button modifies alive or dead status */}
            <button className="toggle-button" onClick={() => onToggle(encounterId)}>
                {alive ? "Alive" : "Dead"}
                {/* delete button removes encounter */}
            </button>
            <button className="delete-button" onClick={() => onDelete(encounterId)}>
                X
            </button>
        </div>
    )

}

export default Encounter;