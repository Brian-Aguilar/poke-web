/**
 * Pokemons
 */
const queryListPokemon = (data) => {
  const limitDefault = 10;
  const limit = limitDefault * data;
  const offset = limit - limitDefault;
  const queryGraphl = `query listPokemonPokeAPIquery {
    pokemon_v2_pokemon(limit: ${limitDefault}, offset: ${offset}) {
      name
      id
      pokemon_v2_pokemontypes {
        slot
        pokemon_v2_type {
          name
        }
      }
    }
  }`;
  return queryGraphl;
};
const querySearchPokemon = (data) => {
  return `query searchPokemonPokeAPIquery {
    pokemon_v2_pokemon(where: {name: {_iregex: "${data}"}}) {
      name
      id
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }`;
};
const queryGetPokemon = (data) => {
  return `query samplePokeAPIquery {
    pokemon_v2_pokemon(where: {id: {_eq: ${data}}}) {
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
};

/**
 * Items
 */
const queryListItems = (data) => {
  const limitDefault = 10;
  const limit = limitDefault * data;
  const offset = limit - limitDefault;
  const queryGraphl = `query samplePokeAPIquery {
    pokemon_v2_item(limit: ${limitDefault}, offset: ${offset}) {
      name
      id
      cost
    }
  }`;
  return queryGraphl;
};
const querySearchItems = (data) => {
  return `query searchItemsPokeAPIquery {
    pokemon_v2_item(where: {name: {_iregex: "${data}"}}) {
      name
      id
      cost
    }
  }`;
};

const apiGraphQL = (data, tipo) => {
  let queryGraphl = "";
  switch (tipo) {
    case "LIST_POKEMONS":
      queryGraphl = queryListPokemon(data);
      break;
    case "SEARCH_POKEMONS":
      queryGraphl = querySearchPokemon(data);
      break;
    case "GET_POKEMON":
      queryGraphl = queryGetPokemon(data);
      break;
    case "LIST_ITEMS":
      queryGraphl = queryListItems(data);
      break;
    case "SEARCH_ITEMS":
      queryGraphl = querySearchItems(data);
      break;
    default:
      break;
  }

  return {
    url: "https://beta.pokeapi.co/graphql/v1beta",
    method: "post",
    data: {
      query: queryGraphl,
    },
  };
};
export default apiGraphQL;
