import { useCallback, useState } from "react";
import axios from "axios";

const configuracion = (id) => {
  const queryGraphl = `query samplePokeAPIquery {
    pokemon_v2_pokemon(where: {id: {_eq: ${id}}}) {
      name
      pokemon_species_id
      pokemon_v2_pokemontypes {
        slot
        pokemon_v2_type {
          name
        }
      }
      height
      base_experience
      weight
      is_default
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
        is_hidden
        slot
      }
      pokemon_v2_pokemonspecy {
        gender_rate
        pokemon_v2_evolutionchain {
          pokemon_v2_pokemonspecies(order_by: {id: asc}) {
            name
            id
            pokemon_v2_pokemons {
              pokemon_v2_pokemontypes {
                pokemon_v2_type {
                  name
                }
              }
            }
          }
        }
        pokemon_v2_pokemoncolor {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        stat_id
        pokemon_v2_stat {
          name
        }
      }
    }
  }`;
  return {
    url: "https://beta.pokeapi.co/graphql/v1beta",
    method: "post",
    data: {
      query: queryGraphl,
    },
  };
};

const initalState = {
  datos: [],
  isLoading: false,
};

const usePokemonHook = () => {
  const [pokemon, setPokemon] = useState(initalState);

  const getPokemon = useCallback((id) => {
    setPokemon((p) => ({
      ...p,
      isLoading: true,
    }));

    axios(configuracion(id)).then((res) => {
      const {
        status,
        data: { data },
      } = res;

      if (status === 200) {
        setPokemon({
          datos: data.pokemon_v2_pokemon[0],
          isLoading: false,
        });
      }
    });
  }, []);

  const resetPokemon = () => {
    setPokemon(initalState);
  };

  return { pokemon, getPokemon, resetPokemon };
};

export default usePokemonHook;
