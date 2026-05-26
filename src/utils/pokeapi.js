export const getPokemon = async (mon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${mon.toLowerCase()}`);
    const data = await response.json();

    return {
        sprite: data.sprites.other.showdown.front_default ?? data.sprites.front_default,
        types: data.types.map(t => t.type.name),
        stats: data.stats.reduce((acc, s) => {
            acc[s.stat.name] = s.base_stat;
            return acc;
        }, {})
    };
} ; 



