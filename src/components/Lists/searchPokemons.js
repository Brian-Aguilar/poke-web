import { useEffect } from "react";
import { usePokemon } from "../../R";
import axios from "axios";
import { imageByPokemon } from "../../utils/pokemons";
import ListNormal from "./normal";
import apiGraphQL from "../../API";

const ListSearchPokemons = ({ pokemon }) => {
  const { pokemonState, pokemonDispatch } = usePokemon();

  useEffect(() => {
    axios(apiGraphQL(pokemon, "SEARCH_POKEMONS")).then((res) => {
      pokemonDispatch({ type: "POKEMONS_LOADING" });
      const {
        status,
        data: { data },
      } = res;

      const filtrarDatos = data.pokemon_v2_pokemon.map((dato) => ({
        id: dato.id,
        number_id: `${dato.id}`.padStart(3, 0),
        name: dato.name.replaceAll("-", " "),
        image: imageByPokemon(dato.id),
        types: dato.pokemon_v2_pokemontypes,
      }));

      if (status === 200) {
        pokemonDispatch({ type: "POKEMONS_LIST", payload: filtrarDatos });
      }
    });
    // eslint-disable-next-line
  }, [pokemon]);
  return (
    <ListNormal
      data={pokemonState.listPokemons}
      type="pokemon"
      isLoading={pokemonState.isLoading}
    />
  );
};

export default ListSearchPokemons;
