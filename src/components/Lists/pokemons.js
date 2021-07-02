import axios from "axios";
import { memo, useCallback, useEffect } from "react";
import { usePokemon } from "../../R";
import apiGraphQL from "../../API";
import { imageByPokemon } from "../../utils/pokemons";

import ListBase from "./";

const ListPokemons = () => {
  const { pokemonState, pokemonDispatch } = usePokemon();

  const pokemonAxios = useCallback(() => {
    pokemonDispatch({ type: "POKEMONS_LOADING" });
    axios(apiGraphQL(pokemonState.pokemons.next, "LIST_POKEMONS")).then(
      (res) => {
        const {
          status,
          data: { data },
        } = res;

        if (status === 200) {
          const datosFiltrados = data.pokemon_v2_pokemon.map((dato) => ({
            id: dato.id,
            number_id: `${dato.id}`.padStart(3, 0),
            name: dato.name,
            image: imageByPokemon(dato.id),
            types: dato.pokemon_v2_pokemontypes,
          }));
          pokemonDispatch({
            type: "POKEMONS",
            payload: {
              data: datosFiltrados,
              next: pokemonState.pokemons.next + 1,
            },
          });
        }
      }
    );
  }, [pokemonDispatch, pokemonState.pokemons]);

  useEffect(() => {
    if (pokemonState.pokemons.data.length === 0) {
      pokemonAxios();
    }
  }, [pokemonState.pokemons.data, pokemonAxios]);

  return (
    <ListBase
      data={pokemonState.pokemons}
      dispatch={pokemonAxios}
      isLoading={pokemonState.isLoading}
      type="pokemon"
    />
  );
};

export default memo(ListPokemons);
