import Pokemon from "./Pokemon";
import '../styles/Slot.css'

//represents a single slot on a pokemon team (out of 6)
//has 3 states: empty, active (selected by user), and occupied (contains a pokemon)

function Slot({pokemon, isActive, onClick, index}) {
  return (
    //dynamically apply classes based on state
    <div
      className={`slot ${isActive ? "active" : ""} ${pokemon ? "occupied" : "empty"}`}
      onClick={onClick}
    >
      {/* render the pokemon if occupied, otherwise prompt user to fill slot or show slot number if not selected */}
      {pokemon ? (
        <Pokemon name={pokemon} />
      ) : (
        <p>{isActive ? "Select a Pokemon" : `Slot ${index + 1}`}</p>
      )}
    </div>
  );
}

export default Slot;
