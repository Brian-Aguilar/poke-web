import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";

import { usePokemon } from "../R";
import apiGraphQL from "../API";
import { imageByPokemon } from "../utils/pokemons";

import NavbarDP from "../components/Navbar/detailPokemon";
import ListCardInfo from "../components/Lists/info";
import Badge from "../components/Badge";

import LoadPokeball from "../components/svg/load";
import PokeballFondo from "../components/svg/pokeball_gris";

const DetailPokemonPage = ({ id }) => {
  const {
    pokemonState: { pokemon, pokemons, isLoading },
    pokemonDispatch,
  } = usePokemon();

  useEffect(() => {
    pokemonDispatch({ type: "POKEMONS_LOADING" });
    axios(apiGraphQL(id, "GET_POKEMON")).then((res) => {
      const {
        status,
        data: { data },
      } = res;

      if (status === 200) {
        pokemonDispatch({
          type: "POKEMON",
          payload: data.pokemon_v2_pokemon[0],
        });
      }
    });
    // eslint-disable-next-line
  }, [id]);
  const color =
    pokemon?.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name || "none";

  return (
    <DetailPokemonBack
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2, delay: 0.15 }}
    >
      <DetailPokemoContent layoutId={`pokemon-detail-${id}`}>
        {isLoading && (
          <LoadingController>
            <LoadPokeball />
          </LoadingController>
        )}

        {pokemon !== null && pokemons.next !== 1 && isLoading === false && (
          <DetailPokemonStyle className={`${color}`}>
            <NavbarDP
              id={id}
              name={pokemon.name}
              resetData={() => pokemonDispatch({ type: "POKEMON_CLEAR" })}
            />
            <DPContent>
              <motion.img
                src={imageByPokemon(id)}
                alt={`pokemon-img-${pokemon.name}`}
                layoutId={`pokemon-img-${id}`}
                className="pokemon-image"
              />
              <div>
                {pokemon?.pokemon_v2_pokemontypes?.map((d, i) => (
                  <Badge key={`type-${i}`} nombre={d.pokemon_v2_type.name} />
                ))}
              </div>
              <span className="pokeball-fondo">
                <PokeballFondo />
              </span>
            </DPContent>

            <ListCardInfo datos={pokemon} color={color} />
          </DetailPokemonStyle>
        )}
      </DetailPokemoContent>
    </DetailPokemonBack>
  );
};

const DetailPokemonBack = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DetailPokemoContent = styled(motion.div)`
  background: var(--g-white), white;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  @media screen and (min-width: 375px) {
    border-radius: 1.25em;
    max-width: 414px;
    max-height: 812px;
    min-height: 812px;
  }
`;

const DetailPokemonStyle = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  &.green {
    background: var(--g-green), white;
  }
  &.red {
    background: var(--g-red), white;
  }
  &.blue,
  &.white {
    background: var(--g-blue), white;
  }
  &.brown {
    background: var(--g-orange), white;
  }
  &.purple {
    background: var(--g-purpure), white;
  }
  &.yellow {
    background: var(--g-yellow), white;
  }
  &.pink {
    background: var(--g-pink), white;
  }
  &.gray {
    background: var(--g-black), white;
  }
`;

const DPContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25em;
  position: relative;
  max-height: 273px;

  .pokemon-image {
    max-width: 150px;
    position: initial;
    z-index: 3;
    @media screen and (min-width: 375px) {
      max-width: 200px;
    }
  }

  .pokeball-fondo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.5) rotate(150deg);
    opacity: 0.2;
    z-index: 2;
  }
  div {
    display: flex;
    justify-content: center;
    gap: 5px;
    div {
      max-height: 33px;
    }
  }
`;

const LoadingController = styled.div`
  padding: 1.25em;
  margin-top: 1.25em;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default DetailPokemonPage;
