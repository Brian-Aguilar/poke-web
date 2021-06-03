import { memo } from "react";

import ListBase from "./";

const ListPokemons = ({ listPokemons, getListPokemons }) => {
  return (
    <ListBase data={listPokemons} getData={getListPokemons} type="pokemon" />
  );
};

export default memo(ListPokemons);
