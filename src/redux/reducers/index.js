import { combineReducers } from "redux";
import detailPokemonReducer from "./detailPokemonReducer";
import pokemonReducer from "./pokemonReducers";
import totalPokemonsReducer from "./totalPokemonReducer";

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  detailPokemon: detailPokemonReducer,
  totalPokemons: totalPokemonsReducer,
});

export default rootReducer;
