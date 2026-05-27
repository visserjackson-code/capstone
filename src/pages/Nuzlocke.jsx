import Encounter from "../components/Encounter";

function Nuzlocke() {
  const testEncounter = { id: 1, pokemon: 'pidgey', location: 'Route 1', alive: true };

  return (
    <div>
      <Encounter
        encounter={testEncounter}
        onToggle={(id) => console.log('toggle', id)}
        onDelete={(id) => console.log('delete', id)}
      />
    </div>
  );
}

export default Nuzlocke;