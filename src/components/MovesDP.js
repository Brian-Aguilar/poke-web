import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { quitarSimboloNombre } from "../utils/nombres";

const MovesDetailPokemon = ({ moves, active }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {active && (
        <MovesStyle
          variants={movesAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {moves.map((move) => (
            <span key={move.move.name}>
              {quitarSimboloNombre(move.move.name)}
            </span>
          ))}
        </MovesStyle>
      )}
    </AnimatePresence>
  );
};

const movesAnimation = {
  hidden: { x: 1000, opacity: 0 },
  show: { x: 0, opacity: 1 },
  exit: { x: 1000, opacity: 0 },
};

const MovesStyle = styled(motion.div)`
  width: 100%;
  height: 80vh;
  padding: 0 3em;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;

  span {
    text-transform: capitalize;
  }
`;

export default MovesDetailPokemon;
