import { useState } from "react";
import Pokemon from "../components/Pokemon";
import Team from "../components/Team";

function Tracker() {

    const [input, setInput] = useState('');
    const [search, setSearch] = useState('');

    return (
        <>
        <h1>Search for a Pokémon</h1>
        <div>
            <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a Pokémon name"
            />

            <button className="tracker-button" onClick={() => setSearch(input)}>Search</button>

            {search && <Pokemon name={search} />}
        </div>
        <Team/>
        </>
    )
}


export default Tracker;