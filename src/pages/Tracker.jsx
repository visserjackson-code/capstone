import {useState} from "react";
import Team from "../components/Team";
import {GAMES} from "../utils/games";
import "../styles/Tracker.css";

function Tracker() {
  const [input, setInput] = useState("");
  const [teams, setTeams] = useState(
    Object.fromEntries(GAMES.map((game) => [game.id, Array(6).fill(null)])),
  );
  const [activeSlot, setActiveSlot] = useState(null);
  const [selectedGame, setSelectedGame] = useState(GAMES[0].id);

  const currentTeam = teams[selectedGame];

  const handleSlotClick = (index) => {
    setActiveSlot(index);
  };

  const isOccupied = activeSlot !== null && currentTeam[activeSlot] !== null;

  const handleSearch = () => {
    //no slot selected
    if (activeSlot === null) return;
    
    const newTeam = [...currentTeam];

    if (isOccupied) {
        newTeam[activeSlot] = null;
    }

    else if (input) {
        newTeam[activeSlot] = input.toLowerCase();
        setInput("");
    }

    setTeams({...teams, [selectedGame]: newTeam});
    setActiveSlot(null);

  }

  return (
    <>
    <div className="page-no-background">
      <h1 className="tracker-header">Add a Pokémon</h1>
      <p className="tracker-desc">
        {" "}
        Click a team slot, then search for a Pokémon and click the add button.
      </p>
      <div>
        <select
          value={selectedGame}
          onChange={(e) => setSelectedGame(e.target.value)}
          className="games-select"
        >
          {GAMES.map((game) => (
            <option key={game.id} value={game.id}>
              {game.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a Pokémon name"
        />
        <button className="search-button" onClick={handleSearch}>
          {isOccupied ? "Remove Pokémon" : "Add Pokémon"}
        </button>
      </div>
      <Team team={currentTeam} activeSlot={activeSlot} onSlotClick={handleSlotClick} />
      </div>
    </>
  );
}

export default Tracker;
