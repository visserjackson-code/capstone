import Slot from "./Slot";

function Team({team, activeSlot, onSlotClick}) {
    return (
        <div className="team">
            {team.map((pokemon, index) => (
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