import useSearchPokemons from "../../hooks/useSearchPokemons";
import ListNormal from "./normal";

const ListSearchPokemons = ({ pokemon }) => {
  const { pokemons } = useSearchPokemons(pokemon);
  return <ListNormal data={pokemons} type="pokemon" />;
};

export default ListSearchPokemons;
