import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const configuracion = (page = 1) => {
  const limitDefault = 10;
  const limit = limitDefault * page;
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
  next: 1,
  previous: 1,
  isLoading: false,
};
const image = (id) => {
  if (id < 899) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

const useListPokemonsHook = () => {
  const [listPokemons, setLisPokemons] = useState(initalState);

  // obteniedo datos
  const getListPokemons = useCallback((page) => {
    setLisPokemons((lp) => ({
      ...lp,
      isLoading: true,
    }));
    axios(configuracion(page)).then((res) => {
      const {
        status,
        data: { data },
      } = res;

      if (status === 200) {
        const datosFiltrados = data.pokemon_v2_pokemon.map((dato) => ({
          id: dato.id,
          number_id: `${dato.id}`.padStart(3, 0),
          name: dato.name,
          image: image(dato.id),
          types: dato.pokemon_v2_pokemontypes,
        }));
        setLisPokemons((lp) => ({
          next: lp.next + 1,
          previous: lp.previous === 1 ? 1 : lp.previous - 1,
          datos: [...lp.datos, ...datosFiltrados],
          isLoading: false,
        }));
      }
    });
  }, []);

  useEffect(() => {
    getListPokemons();
  }, [getListPokemons]);

  return { listPokemons, getListPokemons };
};

export default useListPokemonsHook;
