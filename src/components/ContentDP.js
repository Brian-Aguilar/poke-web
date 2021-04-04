import { motion } from "framer-motion";
import styled from "styled-components";
import MovesDetailPokemon from "./MovesDP";
import StatsDetailPokemon from "./StatsDP";

const ContentDetailPokemon = ({ datos, contenido, setContenido }) => {
  const dragDirection = (__, info) => {
    if (info.delta.x > 0) {
      setContenido(false);
    }
    if (info.delta.x < 0) {
      setContenido(true);
    }
  };
  return (
    <ContentStyle
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(__, info) => dragDirection(__, info)}
    >
      <StatsDetailPokemon stats={datos.stats} active={contenido} />

      <MovesDetailPokemon moves={datos.moves} active={contenido} />
    </ContentStyle>
  );
};

const ContentStyle = styled(motion.div)`
  height: 100%;
  height: 38vh;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  /* background-color: red; */
  overflow: hidden;

  @media screen and (min-width: 764px) {
    height: 100%;
  }
`;
export default ContentDetailPokemon;
