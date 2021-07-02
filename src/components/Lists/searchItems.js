import axios from "axios";
import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiGraphQL from "../../API";
import { usePokemon } from "../../R";
import { imageByItem } from "../../utils/pokemons";
import ListNormal from "./normal";

const ListSearchItems = () => {
  const { item } = useParams();
  const {
    itemsState: { searchPokemons, isLoading },
    itemsDispatch,
  } = usePokemon();
  const itemAxios = useCallback(() => {
    itemsDispatch({ type: "ITEMS_LOADING" });
    axios(apiGraphQL(item, "SEARCH_ITEMS")).then((res) => {
      const {
        status,
        data: { data },
      } = res;

      if (status === 200) {
        const datosFiltrados = data.pokemon_v2_item.map((dato) => ({
          ...dato,
          image: imageByItem(dato.name),
        }));
        itemsDispatch({ type: "SEARCH_ITEMS", payload: datosFiltrados });
      }
    });
  }, [item, itemsDispatch]);

  useEffect(() => {
    itemAxios();
  }, [itemAxios]);
  return (
    <ListNormal data={searchPokemons} type="search" isLoading={isLoading} />
  );
};

export default ListSearchItems;
