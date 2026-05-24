import Pokemon from "./Pokemon";

function Slot({pokemon, isActive, onClick, index}) {
  return (
    <div
      className={`slot ${isActive ? "active" : ""} ${pokemon ? "occupied" : "empty"}`}
      onClick={onClick}
    >
      {pokemon ? (
        <Pokemon name={pokemon} />
      ) : (
        <p>{isActive ? "Select a Pokemon" : `Slot ${index + 1}`}</p>
      )}
    </div>
  );
}

export default Slot;
