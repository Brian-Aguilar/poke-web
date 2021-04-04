import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import CardList from "../components/CardList";
import { PageStyle } from "../components/GlobalStyle";

const SearchPokemon = () => {
  const location = useLocation();
  const param = location.pathname.split("/")[2];
  const [pokemons, setPokemons] = useState([]);

  const { datos } = useSelector((state) => state.totalPokemons);

  useEffect(() => {
    if (datos !== null) {
      const searchPokemon = datos.filter((p) => p.name?.search(param) >= 0);
      setPokemons(searchPokemon);
    }
  }, [datos, param]);

  return (
    <PageStyle>
      <h1>{param}</h1>

      {pokemons.length > 0 && <CardList data={pokemons} />}
    </PageStyle>
  );
};
export default SearchPokemon;
