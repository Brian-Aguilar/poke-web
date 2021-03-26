import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducers";

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
});

export default rootReducer;
