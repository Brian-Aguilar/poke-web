import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import Icon from "../components/svg";

const LoadingPage = ({ isLoading, isError }) => {
  return (
    <>
      {isError === false && (
        <AnimatePresence exitBeforeEnter>
          {isLoading && (
            <LoadingStyle
              key="LoadingPage"
              variants={animationLoading}
              initial="closed"
              animate="show"
              exit="exit"
            >
              <motion.div variants={animationPokeball} animate="show">
                <Icon icon="pokeball" size="5em" />
              </motion.div>
              <h2>Cargando Pokemones</h2>
            </LoadingStyle>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

const animationLoading = {
  closed: { opacity: 1, top: "100vh" },
  show: { opacity: 1, top: 0, transition: { dumping: 300 } },
  exit: { opacity: 0, transition: { delay: 0.75 } },
};
const animationPokeball = {
  closed: {},
  show: {
    rotate: [0, 360],
    transition: { duration: 1, repeat: Infinity, ease: "backInOut" },
  },
  exit: {},
};

const LoadingStyle = styled(motion.div)`
  width: 100vw;
  background-color: white;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 901;

  path {
    fill: rgb(var(--black));
  }
  h2 {
    margin-top: 2em;
    text-transform: uppercase;
  }
`;

export default LoadingPage;
