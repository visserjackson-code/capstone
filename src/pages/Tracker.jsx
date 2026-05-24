import { useState } from "react";
import Team from "../components/Team";
import "../styles/Tracker.css"

function Tracker() {
    const [input, setInput] = useState("");
    const [team, setTeam] = useState(Array(6).fill(null));
    const [activeSlot, setActiveSlot] = useState(null);

    const handleSlotClick = (index) => {
        setActiveSlot(index);
    };

    const handleSearch = () => {
        if (input && activeSlot !== null) {
            const newTeam = [...team];
            newTeam[activeSlot] = input.toLowerCase();
            setTeam(newTeam);
            setActiveSlot(null);
            setInput("");
        }
    };

    return (
        <>
        <h1 className="tracker-header">Add a Pokémon</h1>
        <p className="tracker-desc"> Click a team slot, then search for a Pokémon and click the add button.</p>
        <div>
            <input
             type="text"
             value={input}
             onChange={(e) => setInput(e.target.value)}
             placeholder="Enter a Pokémon name" 
             />
             <button className="search-button" onClick={handleSearch}>Add Pokémon</button>
        </div>
        <Team team={team} activeSlot={activeSlot} onSlotClick={handleSlotClick} />
        </>
    );
}


export default Tracker;