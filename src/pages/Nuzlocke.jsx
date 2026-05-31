import { useState, useEffect } from "react";
import { GAMES } from "../utils/games";
import AddEncounterForm from "../components/AddEncounterForm";
import Encounter from "../components/Encounter";
import {
  fetchEncounters,
  addEncounter as addEncounterAPI,
  toggleEncounter as toggleEncounterAPI,
  deleteEncounter as deleteEncounterAPI
} from "../utils/api";
import "../styles/Nuzlocke.css";

function Nuzlocke({ token }) {
  const [selectedGame, setSelectedGame] = useState(GAMES[0].id);
  const [encounters, setEncounters] = useState(
    Object.fromEntries(GAMES.map((game) => [game.id, []]))
  );

  const currentEncounters = encounters[selectedGame];


  useEffect(() => {
    if (!token) return;
    fetchEncounters(token, selectedGame).then((data) => {
      if (!Array.isArray(data)) return;
      setEncounters((prev) => ({ ...prev, [selectedGame]: data }));
    });
  }, [token, selectedGame]);

  const handleAdd = async (encounter) => {
    if (token) {
      const saved = await addEncounterAPI(token, {
        ...encounter,
        game: selectedGame
      });
      if (saved._id) {
        setEncounters((prev) => ({
          ...prev,
          [selectedGame]: [...currentEncounters, saved]
        }));
        return;
      }
    }
  
    setEncounters((prev) => ({
      ...prev,
      [selectedGame]: [...currentEncounters, encounter]
    }));
  };

  const handleToggle = async (id) => {
    if (token) {
      const updated = await toggleEncounterAPI(token, id);
      if (updated._id) {
        setEncounters((prev) => ({
          ...prev,
          [selectedGame]: currentEncounters.map((enc) =>
            enc._id === id ? updated : enc
          )
        }));
        return;
      }
    }

    setEncounters((prev) => ({
      ...prev,
      [selectedGame]: currentEncounters.map((enc) =>
        enc.id === id ? { ...enc, alive: !enc.alive } : enc
      )
    }));
  };

  const handleDelete = async (id) => {
    if (token) {
      await deleteEncounterAPI(token, id);
    }
    setEncounters((prev) => ({
      ...prev,
      [selectedGame]: currentEncounters.filter(
        (enc) => (enc._id || enc.id) !== id
      )
    }));
  };

  return (
    <div className="nuzlocke-page">
      <h1 className="nuzlocke-tracker">Nuzlocke Tracker</h1>
      <p className="nuzlocke-desc">Track your Nuzlocke encounters below. Login to save your runs!</p>
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
      <AddEncounterForm onAdd={handleAdd} />
      <div className="encounter-list">
        {currentEncounters.length === 0 ? (
          <p className="nothing-yet">No encounters yet. Add one above.</p>
        ) : (
          currentEncounters.map((enc) => (
            <Encounter
              key={enc._id || enc.id}
              encounter={enc}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Nuzlocke;