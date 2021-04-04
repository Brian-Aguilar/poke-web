import axios from "axios";
import {
  obtenerID,
  obtenerImagenAltPorID,
  obtenerImagenPorID,
  obtenerPokemones,
  obtenerTotalPokemones,
} from "../../API";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";

export const getPokemons = (url = null) => async (dispatch) => {
  dispatch({ type: "LOADING_POKEMONS" });

  const nameStorage = "pokemons";
  const dataStorage = getLocalStorage(nameStorage);

  if (dataStorage === null) {
    const {
      data: { next, previous, results },
    } = await axios.get(obtenerPokemones(url));
    const datosR = results.map((pokemon) => {
      return {
        id: obtenerID(pokemon.url),
        name: pokemon.name,
        url: pokemon.url,
        img: obtenerImagenPorID(pokemon.url),
        imgAlt: obtenerImagenAltPorID(pokemon.url),
      };
    });
    dispatch({
      type: "GET_POKEMONS",
      payload: {
        next: next,
        previous: previous,
        data: datosR,
      },
    });

    setLocalStorage(nameStorage, { next: next, data: datosR });
  } else {
    const maxID = url?.split("&")[0].split("=")[1];
    // eslint-disable-next-line
    const searchID = dataStorage.data.filter((e) => e.id == maxID);

    if (searchID.length !== 0) {
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
      dispatch({
        type: "GET_POKEMONS",
        payload: {
          next: next,
          previous: previous,
          data: datosR,
        },
      });
      setLocalStorage(nameStorage, {
        next: next,
        data: [...dataStorage.data, ...datosR],
      });
    } else {
      dispatch({
        type: "GET_POKEMONS",
        payload: {
          next: dataStorage.next,
          data: dataStorage.data,
        },
      });
    }
  }
};

export const getDetailsPokemon = (id) => async (dispatch) => {
  dispatch({ type: "LOADING_DETAILS_POKEMON" });

  const nameStorage = "detailPokemon";
  const dataStorage = getLocalStorage(nameStorage);

  if (dataStorage === null) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    dispatch({
      type: "GET_DETAILS_POKEMON",
      payload: {
        data: data,
      },
    });

    setLocalStorage(nameStorage, [data]);
  } else {
    // eslint-disable-next-line
    const searchID = dataStorage.filter((e) => e.id == id);

    if (searchID.length === 0) {
      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        dispatch({
          type: "GET_DETAILS_POKEMON",
          payload: {
            data: data,
          },
        });
        setLocalStorage(nameStorage, [...dataStorage, data]);
      } catch (error) {
        dispatch({ type: "ERROR_DETAILS_POKEMON" });
      }
    } else {
      dispatch({
        type: "GET_DETAILS_POKEMON",
        payload: {
          data: searchID[0],
        },
      });
    }
  }
};

export const getTotalNamePokemons = () => async (dispatch) => {
  const nameStorage = "totalPokemons";
  const dataStorage = getLocalStorage(nameStorage);

  if (dataStorage === null) {
    const {
      data: { results },
    } = await axios.get(obtenerTotalPokemones());
    const datosR = results.map((pokemon) => {
      return {
        id: obtenerID(pokemon.url),
        name: pokemon.name,
        url: pokemon.url,
        img: obtenerImagenPorID(pokemon.url),
        imgAlt: obtenerImagenAltPorID(pokemon.url),
      };
    });
    dispatch({
      type: "GET_TOTAL_POKEMONS",
      payload: {
        datos: datosR,
      },
    });

    setLocalStorage(nameStorage, datosR);
  } else {
    dispatch({
      type: "GET_TOTAL_POKEMONS",
      payload: {
        datos: dataStorage,
      },
    });
  }
};
