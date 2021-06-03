import styled from "styled-components";
import { motion } from "framer-motion";
import NavbarDP from "../components/Navbar/detailPokemon";
import ListCardInfo from "../components/Lists/info";
import Badge from "../components/Badge";

import PokeballFondo from "../images/pokeball_fondo.svg";
import { useContext, useEffect } from "react";
import { PokemonContext } from "../context/pokemonContext";

const getImageById = (id) => {
  if (id < 899) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

const DetailPokemonPage = ({ id }) => {
  const { pokemon, getPokemon, resetPokemon } = useContext(PokemonContext);
  const color =
    pokemon.datos.pokemon_v2_pokemonspecy?.pokemon_v2_pokemoncolor.name ||
    "none";

  useEffect(() => {
    getPokemon(id);
  }, [getPokemon, id]);
  useEffect(() => {}, [pokemon]);
  return (
    <DetailPokemonBack
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2, delay: 0.15 }}
    >
      <DetailPokemonStyle
        layoutId={`pokemon-detail-${id}`}
        className={`${color}`}
      >
        {pokemon.datos.name !== "" && (
          <>
            <NavbarDP
              id={id}
              name={pokemon.datos.name}
              resetData={resetPokemon}
            />
            <DPContent>
              <motion.img
                src={getImageById(id)}
                alt={`pokemon-img-${pokemon.datos.name}`}
                layoutId={`pokemon-img-${id}`}
                className="pokemon-image"
              />
              <div>
                {pokemon.datos?.pokemon_v2_pokemontypes?.map((d, i) => (
                  <Badge key={`type-${i}`} nombre={d.pokemon_v2_type.name} />
                ))}
              </div>
              <img
                className="pokeball-fondo"
                src={PokeballFondo}
                alt="pokeball-fondo-dpp"
              />{" "}
            </DPContent>

            <ListCardInfo datos={pokemon.datos} color={color} />
          </>
        )}
      </DetailPokemonStyle>
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

const DetailPokemonStyle = styled(motion.div)`
  background: var(--g-white), white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

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

  @media screen and (min-width: 375px) {
    border-radius: 1.25em;
    max-width: 414px;
    max-height: 812px;
    min-height: 812px;
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

export default DetailPokemonPage;
