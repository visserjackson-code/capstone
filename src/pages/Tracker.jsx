import { useState } from "react";
import Team from "../components/Team";

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
        <div>
            <input
             type="text"
             value={input}
             onChange={(e) => setInput(e.target.value)}
             placeholder="Enter a Pokémon name" 
             />
             <button className="search-button" onClick={handleSearch}>Click to add Pokemon</button>
        </div>
        <Team team={team} activeSlot={activeSlot} onSlotClick={handleSlotClick} />
        </>
    );
}


export default Tracker;