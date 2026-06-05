import { useState } from "react";
import "../styles/AddEncounterForm.css";

function AddEncounterForm({onAdd}) {
    const [pokemon, setPokemon] = useState("");
    const [location, setLocation] = useState("");
    const [nickname, setNickname] = useState("");

    const handleAdd = () => {
        if (!pokemon || !location) return;

        onAdd({
            id: Date.now(), //gives encounters unique ids
            pokemon: pokemon.toLowerCase(),
            location,
            nickname,
            alive: true
        });
        setPokemon("");
        setNickname("");
        setLocation("");
    }

    return (
        <div className="add-encounter-form">
            <input
            type="text"
            placeholder="Species name"
            value={pokemon}
            onChange={(e) => setPokemon(e.target.value)}
            />
            <input
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            />
            <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            />
            <button className="add-encounter" onClick={handleAdd}>Add Encounter</button>
        </div>
    );
}

export default AddEncounterForm;