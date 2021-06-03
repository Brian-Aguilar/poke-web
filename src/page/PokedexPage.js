import { useHistory, useLocation } from "react-router";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { BasePageStyle } from "../components/GlobalStyle";
import NavbarPokedex from "../components/Navbar/pokedex";
import DetailPokemonPage from "./DetailPokemonPage";
import SearchInput from "../components/Input/search";
import ListPokemons from "../components/Lists/pokemons";
import ListSearchPokemons from "../components/Lists/searchPokemons";
import { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";

const PokedexPage = () => {
  const history = useHistory();
  const location = useLocation();
  const idArray = location.pathname.split("/");

  const { listPokemons, getListPokemons } = useContext(PokemonContext);

  return (
    <BasePageStyle>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {idArray[2] === "pokemon" && (
            <DetailPokemonPage id={idArray[3]} key="pokemon-card" />
          )}
        </AnimatePresence>

        <NavbarPokedex />
        <h1>{idArray[2] !== undefined ? idArray[2] : "pokédex"}</h1>
        <SearchInput base="pokedex" />

        {idArray[1] === "pokedex" &&
          idArray[2] !== "search" &&
          history.length > 2 && (
            <ListPokemons
              listPokemons={listPokemons}
              getListPokemons={getListPokemons}
            />
          )}

        {idArray[2] === "search" && <ListSearchPokemons pokemon={idArray[3]} />}
      </AnimateSharedLayout>
    </BasePageStyle>
  );
};

export default PokedexPage;
