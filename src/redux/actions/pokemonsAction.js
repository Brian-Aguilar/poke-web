import axios from "axios";
import { obtenerID, obtenerImagenPorID, obtenerPokemones } from "../../API";

export const getPokemons = (url = null) => async (dispatch) => {
  // Obteniendo pokemones en true
  dispatch({ type: "LOADING_POKEMONS" });

  //obtener pokemons de la api
  const {
    data: { next, previous, results },
  } = await axios.get(obtenerPokemones(url));

  const datosR = results.map((pokemon) => {
    return {
      id: obtenerID(pokemon.url),
      name: pokemon.name,
      url: pokemon.url,
      img: obtenerImagenPorID(pokemon.url),
    };
  });

  // Asignar los datos obtenidos
  dispatch({
    type: "GET_POKEMONS",
    payload: {
      next: next,
      previous: previous,
      data: datosR,
    },
  });
};
