import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const configuracion = (namePokemon) => {
  const queryGraphl = `query searchPokemonPokeAPIquery {
    pokemon_v2_pokemon(where: {name: {_iregex: "${namePokemon}"}}) {
      name
      id
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
  `;
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

const image = (id) => {
  if (id < 899) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

const useSearchPokemons = (name) => {
  const [pokemons, setPokemons] = useState(initalState);

  const searchPokemon = useCallback((name) => {
    setPokemons({ datos: [], isLoading: true });

    axios(configuracion(name)).then((res) => {
      const {
        status,
        data: { data },
      } = res;

      const filtrarDatos = data.pokemon_v2_pokemon.map((dato) => ({
        id: dato.id,
        number_id: `${dato.id}`.padStart(3, 0),
        name: dato.name,
        image: image(dato.id),
        types: dato.pokemon_v2_pokemontypes,
      }));

      if (status === 200) {
        setPokemons({ datos: filtrarDatos, isLoading: false });
      }
    });
  }, []);

  useEffect(() => {
    searchPokemon(name);
  }, [name, searchPokemon]);

  return { pokemons };
};

export default useSearchPokemons;
