import { useLocation } from "react-router-dom";

import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { BasePageStyle } from "../components/GlobalStyle";
import DetailPokemonPage from "./DetailPokemonPage";
import SearchInput from "../components/Input/search";
import ListPokemons from "../components/Lists/pokemons";
import ListSearchPokemons from "../components/Lists/searchPokemons";

const PokedexPage = () => {
  const location = useLocation();
  /**
   * SORP =>
   * Search data
   * Or
   * Pokemon id
   */
  const [, base, namePage, sORp] = location.pathname.split("/");

  return (
    <BasePageStyle>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {namePage === "pokemon" && (
            <DetailPokemonPage id={sORp} key="pokemon-card" />
          )}
        </AnimatePresence>

        <h1>{namePage !== undefined ? namePage : "pokédex"}</h1>
        <SearchInput base="pokedex" />

        {base === "pokedex" && namePage !== "search" && <ListPokemons />}

        {namePage === "search" && <ListSearchPokemons pokemon={sORp} />}
      </AnimateSharedLayout>
    </BasePageStyle>
  );
};

export default PokedexPage;
