import Slot from "./Slot";

function Team() {
    return (
        <div className="team">
            <Slot index={0} pokemon={null} isActive={false} onClick={() => console.log("Clicked 1")}></Slot>
            <Slot index={1} pokemon={null} isActive={true} onClick={() => console.log("Clicked 2")}></Slot>
            <Slot index={1} pokemon="mudkip" isActive={false} onClick={() => console.log("Clicked 3")}></Slot>
        </div>
    )
}


export default Team;