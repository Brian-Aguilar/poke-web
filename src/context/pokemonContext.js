import { createContext } from "react";
import useListPokemonsHook from "../hooks/useListPokemonsHook";
import usePokemonHook from "../hooks/usePokemonHook";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const { listPokemons, getListPokemons } = useListPokemonsHook();
  const { pokemon, getPokemon, resetPokemon } = usePokemonHook();
  // console.log("PokemonProvider");

  return (
    <PokemonContext.Provider
      value={{
        listPokemons,
        getListPokemons,
        pokemon,
        getPokemon,
        resetPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
