import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../redux/actions/pokemonsAction";

import CardList from "../components/CardList";
import DetailPokemonPage from "./DetailPokemon";
import { useLocation } from "react-router";
import styled from "styled-components";
import { PageStyle } from "../components/GlobalStyle";
import LoadingPage from "./LoadingPage";

const HomePage = () => {
  const location = useLocation();
  const pathID = location.pathname.replace("/pokemon/", "");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const { data, isLoading, next } = useSelector((state) => state.pokemons);

  const getMorePokemons = () => {
    dispatch(getPokemons(next));
  };

  return (
    <>
      <LoadingPage isLoading={isLoading} />
      <PageStyle>
        <h1>Pokedex</h1>

        <CardList data={data} />

        <DetailPokemonPage path={pathID} />

        <ButtonStyle onClick={getMorePokemons}>
          Cargar más pokemones
        </ButtonStyle>
      </PageStyle>
    </>
  );
};

const ButtonStyle = styled.button`
  background-color: rgb(var(--red));
  display: block;
  font-size: 1.3rem;
  padding: 1em;
  color: white;
  border-radius: 1em;
  border: 0;
  margin: 3em auto 0.5em;
  outline: none;
  cursor: pointer;
`;
export default HomePage;
