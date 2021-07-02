import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

import PokeballFondo from "../svg/pokeball_gris";
import Badge from "../Badge";
import LoadImage from "../image/load";

const CardPokemon = ({ dato }) => {
  return (
    <Link to={`/pokedex/pokemon/${dato.id}`}>
      <CardPokemonStyle
        className={`shadow ${dato.types[0].pokemon_v2_type.name}`}
        layoutId={`pokemon-detail-${dato.id}`}
      >
        <PokemonID layoutId={`pokemon-id-${dato.id}`}>
          #{dato.number_id}
        </PokemonID>
        <div className="card-pokemon-contenido">
          <div className="header">
            <h2>{dato.name}</h2>
            <div className="header-contenido">
              {dato.types?.map((type, i) => (
                <Badge
                  key={`badge-${dato.name}-${i}`}
                  nombre={type.pokemon_v2_type.name}
                />
              ))}
            </div>
          </div>
          <motion.div
            className="pokemon-image"
            layoutId={`pokemon-img-${dato.id}`}
          >
            <LoadImage srcURL={dato.image} />
          </motion.div>
          <span className="pokeball-fondo">
            <PokeballFondo />
          </span>
        </div>
      </CardPokemonStyle>
    </Link>
  );
};

const PokemonID = styled(motion.span)`
  position: absolute;
  top: -15px;
  left: 1.25em;
  padding: 5px 15px;
  border-radius: 10px;
  background: var(--g-black), white;
  color: rgb(var(--white));
`;

const CardPokemonStyle = styled(motion.div)`
  margin-top: 2em;
  width: 100%;
  border-radius: 1.25em;
  position: relative;
  z-index: initial;

  .card-pokemon-contenido {
    width: 100%;
    height: 100%;
    padding: 1.25em 0 1.25em 1.25em;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: initial;

    .header {
      h2 {
        font-size: 1.5rem;
        position: initial;
        text-transform: capitalize;
        z-index: 2;

        @media screen and (min-width: 420px) {
          font-size: 1.75rem;
        }
      }

      .header-contenido {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        gap: 5px;
      }
    }
    .pokemon-image {
      max-width: 150px;
      position: initial;
      z-index: 2;
    }

    .pokeball-fondo {
      position: absolute;
      bottom: -5em;
      right: -5em;
      opacity: 0.3;
      transform: scale(0.75) rotate(20deg);
      z-index: 1;
    }
  }

  &.bug,
  &.grass,
  &.steel {
    background: var(--g-green);
  }
  &.dark,
  &.normal {
    background: var(--g-black);
  }
  &.flying,
  &.ghost,
  &.water,
  &.dragon,
  &.ice {
    background: var(--g-blue);
  }
  &.fire,
  &.ground,
  &.rock {
    background: var(--g-orange);
  }
  &.poison,
  &.fairy {
    background: var(--g-purpure);
  }
  &.fighting,
  &.psychic {
    background: var(--g-red);
  }
  &.electric {
    background: var(--g-yellow);
  }
`;

export default CardPokemon;
