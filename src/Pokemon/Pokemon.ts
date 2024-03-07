import pokemon from "../data/Pokemon.json";

const pokemonNames = pokemon.map(pokemon => pokemon.name);
const pokemonOptions = pokemonNames.map(name => ({ value: name, label: name }))

export default pokemonOptions;