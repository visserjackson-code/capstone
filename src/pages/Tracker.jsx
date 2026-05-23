import { useState } from "react";
import Pokemon from "../components/Pokemon";

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

        <button class="button">
        <div class="button-outer">
          <div class="button-inner">
            <span>Add to Team</span>
          </div>
        </div>
      </button>
        </>
    )
}


export default Tracker;