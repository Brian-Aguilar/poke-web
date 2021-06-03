import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const configuracion = (page = 1) => {
  const limitDefault = 10;
  const limit = limitDefault * page;
  const offset = limit - limitDefault;

  const queryGraphl = `query samplePokeAPIquery {
    pokemon_v2_item(limit: ${limitDefault}, offset: ${offset}) {
      name
      id
      cost
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
  isLoading: false,
};

const image = (name) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}.png`;
};

const useListItemsHook = () => {
  const [listItems, setListItems] = useState(initalState);

  const getListItems = useCallback((page) => {
    setListItems((li) => ({ ...li, isLoading: true }));

    axios(configuracion(page)).then((res) => {
      const {
        status,
        data: { data },
      } = res;

      if (status === 200) {
        const datosFiltrados = data.pokemon_v2_item.map((dato) => ({
          ...dato,
          image: image(dato.name),
        }));
        setListItems((li) => ({
          datos: [...li.datos, ...datosFiltrados],
          next: li.next + 1,
          isLoading: false,
        }));
      }
    });
  }, []);

  useEffect(() => {
    getListItems();
  }, [getListItems]);

  return { listItems, getListItems };
};

export default useListItemsHook;
