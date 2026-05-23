export const getSprite = async (mon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${mon.toLowerCase()}`);
    const data = await response.json();
    const sprite =  data.sprites.other.showdown.front_default;

    return sprite;
}  



