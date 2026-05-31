import {useState, useEffect} from "react";
import Team from "../components/Team";
import {GAMES} from "../utils/games";
import {fetchTeams, saveTeam} from "../utils/api";
import "../styles/Tracker.css";

function Tracker({token}) {
  const [input, setInput] = useState("");
  const [teams, setTeams] = useState(
    Object.fromEntries(GAMES.map((game) => [game.id, Array(6).fill(null)])),
  );
  const [activeSlot, setActiveSlot] = useState(null);
  const [selectedGame, setSelectedGame] = useState(GAMES[0].id);

  useEffect(() => {
  if (!token) return;
  fetchTeams(token).then((data) => {
    console.log("fetched teams", data)
    if (!Array.isArray(data)) return;
    setTeams((prevTeams) => {
      const loaded = { ...prevTeams };
      data.forEach((team) => {
        loaded[team.game] = team.slots;
      });
      return loaded;
    });
  });
}, [token]);

  const currentTeam = teams[selectedGame];

  const isOccupied = activeSlot !== null && currentTeam[activeSlot] !== null;

  const handleSlotClick = (index) => {
    setActiveSlot(index);
  };

  const handleSearch = () => {
    if (activeSlot === null) return;

    const newTeam = [...currentTeam];

    if (isOccupied) {
      newTeam[activeSlot] = null;
    } else if (input) {
      newTeam[activeSlot] = input.toLowerCase();
      setInput("");
    }

    setTeams({...teams, [selectedGame]: newTeam});
    setActiveSlot(null);

    if(token) {
      saveTeam(token, selectedGame, newTeam).then((res) => console.log("saved", res));
    }
  };

  return (
    <>
      <div className="page-no-background">
        <h1 className="tracker-header">Track your teams</h1>
        <p className="tracker-desc">
          {" "}
          Click a team slot, then search for a Pokémon and click the add button. Login to save your teams!
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
            className="pokemon-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a Pokémon name"
          />
          <button className="search-button" onClick={handleSearch}>
            {isOccupied ? "Remove Pokémon" : "Add Pokémon"}
          </button>
        </div>
        <Team
          team={currentTeam}
          activeSlot={activeSlot}
          onSlotClick={handleSlotClick}
        />
      </div>
    </>
  );
}

export default Tracker;
