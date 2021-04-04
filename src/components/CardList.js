import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import CardPokemon from "./Card";

const CardList = ({ data }) => {
  return (
    <AnimatePresence>
      {data.length !== 0 && (
        <CardListStyle
          variants={listCardAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {data.map((pokemon, i) => (
            <CardPokemon key={`${i}-${pokemon.name}`} pokemon={pokemon} />
          ))}
        </CardListStyle>
      )}
    </AnimatePresence>
  );
};

const CardListStyle = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 2em;
  grid-row-gap: 3em;
  margin-top: 2em;

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;

const listCardAnimation = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
      staggerDirection: 1,
      when: "afterChildren",
    },
  },
  exit: {},
};
export default CardList;
