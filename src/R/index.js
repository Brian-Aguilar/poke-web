import { createContext, useContext, useReducer } from "react";
import pokemonsReducer from "./reducers/pokemonsReducer";

import { pokemonInitial } from "./initials/pokemons";
import itemsReducer from "./reducers/itemsReducer";
import { itemsInitial } from "./initials/items";
import languagesReducer from "./reducers/languagesReducer";
import { languagesInitial } from "./initials/languages";

export const PokemonAppContext = createContext();

export const usePokemon = () => useContext(PokemonAppContext);

export const PokemonAppProvider = ({ children }) => {
  const [pokemonState, pokemonDispatch] = useReducer(
    pokemonsReducer,
    pokemonInitial
  );
  const [itemsState, itemsDispatch] = useReducer(itemsReducer, itemsInitial);
  const [languagesState, languageDispatch] = useReducer(
    languagesReducer,
    languagesInitial
  );

  return (
    <PokemonAppContext.Provider
      value={{
        pokemonState,
        pokemonDispatch,
        itemsState,
        itemsDispatch,
        languagesState,
        languageDispatch,
      }}
    >
      {children}
    </PokemonAppContext.Provider>
  );
};
