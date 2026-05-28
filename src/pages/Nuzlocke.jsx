import {useState} from "react";
import {GAMES} from "../utils/games";
import AddEncounterForm from "../components/AddEncounterForm";
import Encounter from "../components/Encounter";
import "../styles/Nuzlocke.css";

function Nuzlocke() {
  const [selectedGame, setSelectedGame] = useState(GAMES[0].id);
  const [encounters, setEncounters] = useState(
    Object.fromEntries(GAMES.map((game) => [game.id, []])),
  );

  const currentEncounters = encounters[selectedGame];

  const handleAdd = (encounter) => {
    setEncounters({
      ...encounters,
      [selectedGame]: [...currentEncounters, encounter],
    });
  };

  const handleToggle = (id) => {
    setEncounters({
      ...encounters,
      [selectedGame]: currentEncounters.map((enc) =>
        enc.id === id ? {...enc, alive: !enc.alive} : enc,
      ),
    });
  };

  const handleDelete = (id) => {
    setEncounters({
      ...encounters,
      [selectedGame]: currentEncounters.filter((enc) => enc.id !== id)
    });
  };

  return (
    <div className="nuzlocke-page">
      <h1 className="nuzlocke-tracker">Nuzlocke Tracker</h1>
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
      <AddEncounterForm onAdd={handleAdd}/>
      <div className="encounter-list">
        {currentEncounters.length === 0 ? (
          <p className="nothing-yet">No encounters yet. Add one above.</p>
        ) : (
          currentEncounters.map((enc) => (
            <Encounter
              key={enc.id}
              encounter={enc}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

    </div>
  )

}

export default Nuzlocke;
