import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const configuracion = (item) => {
  const queryGraphl = `query searchItemsPokeAPIquery {
    pokemon_v2_item(where: {name: {_iregex: "${item}"}}) {
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
  isLoading: false,
};
const image = (name) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}.png`;
};

const useSearchItemsHook = (item) => {
  const [items, setItems] = useState(initalState);

  const searchItems = useCallback((item) => {
    setItems({ datos: [], isLoading: true });

    axios(configuracion(item)).then((res) => {
      const {
        status,
        data: { data },
      } = res;

      if (status === 200) {
        const datosFiltrados = data.pokemon_v2_item.map((dato) => ({
          ...dato,
          image: image(dato.name),
        }));
        setItems({
          datos: datosFiltrados,
          isLoading: false,
        });
      }
    });
  }, []);

  useEffect(() => {
    searchItems(item);
  }, [item, searchItems]);

  return { items };
};

export default useSearchItemsHook;
