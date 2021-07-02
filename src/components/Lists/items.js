import { useCallback, useEffect } from "react";
import { usePokemon } from "../../R";
import axios from "axios";
import apiGraphQL from "../../API";
import { imageByItem } from "../../utils/pokemons";
import ListBase from "./";

const ListItems = () => {
  const {
    itemsState: { items, isLoading },
    itemsDispatch,
  } = usePokemon();

  const itemsAxios = useCallback(() => {
    itemsDispatch({ type: "ITEMS_LOADING" });
    axios(apiGraphQL(items.next, "LIST_ITEMS")).then((res) => {
      const {
        status,
        data: { data },
      } = res;

      if (status === 200) {
        const datosFiltrados = data.pokemon_v2_item.map((dato) => ({
          ...dato,
          image: imageByItem(dato.name),
        }));

        itemsDispatch({
          type: "ITEMS",
          payload: {
            data: datosFiltrados,
            next: items.next + 1,
          },
        });
      }
    });
  }, [items.next, itemsDispatch]);

  useEffect(() => {
    itemsAxios();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <ListBase
        data={items}
        dispatch={itemsAxios}
        type="item"
        isLoading={isLoading}
      />
    </>
  );
};

export default ListItems;
