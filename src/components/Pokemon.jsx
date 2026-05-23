import { getSprite } from "../utils/pokeapi";
import { useState, useEffect } from "react";


function Pokemon ({name}) {

    const [sprite, setSprite] = useState(null);

    useEffect(() => {
        getSprite(name).then(url => setSprite(url));
    }, [name]);

    return (
        <>
        <div className="sprite-img">
            <img src={sprite} alt={name}></img>
        </div>
        </>
    )
}

export default Pokemon;