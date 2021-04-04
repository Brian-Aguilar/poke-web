import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { cardAnimation } from "../animations";
import { quitarSimboloNombre } from "../utils/nombres";

const CardPokemon = ({ pokemon }) => {
  const errorImage = (e) => {
    e.target.src = pokemon.imgAlt;
  };

  return (
    <motion.div variants={cardAnimation}>
      <Link to={`/pokemon/${pokemon.id}`}>
        <CardStyle className="shadow">
          <h3>{quitarSimboloNombre(pokemon.name)}</h3>
          <img src={pokemon.img} alt={pokemon.name} onError={errorImage} />
          <span>#{pokemon.id}</span>
        </CardStyle>
      </Link>
    </motion.div>
  );
};

const CardStyle = styled(motion.div)`
  width: 100%;
  padding: 1em;
  border-radius: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;

  h3 {
    text-transform: capitalize;
    font-weight: lighter;
    margin-left: 1em;
    font-size: 1.5rem;
  }
  img {
    display: block;
    width: 150px;
    position: relative;
    transform: scale(1.2) translateX(-2em);
    transition: all 0.3s ease;
  }
  &:hover img {
    transform: scale(1.35) translateX(1em);
  }

  span {
    color: rgba(var(--shadow), 0.75);
    font-size: 3rem;
    position: absolute;
    top: 5px;
    left: 0.5em;
  }
  &:hover span {
    color: rgba(var(--shadow));
  }

  @media screen and (max-width: 764px) {
    flex-direction: column-reverse;
    h3 {
      margin-left: 0.5em;
    }
    img {
      transform: none;
    }
  }
`;
export default CardPokemon;
