import Slot from "./Slot";

//renders the full pokemon team grid of 6 slots
//recives team state and slot interaction from Tracker.jsx
function Team({team, activeSlot, onSlotClick}) {
    return (
        <div className="team">
            {team.map((pokemon, index) => ( //map over the team array and render slots for each member
                <Slot
                key={index}
                index={index}
                pokemon={pokemon}
                isActive={activeSlot === index}
                onClick={() => onSlotClick(index)}
                />
            ))}
        </div>
    )
}


export default Team;