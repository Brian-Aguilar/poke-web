import { motion } from "framer-motion";
import { useHistory } from "react-router";
import styled from "styled-components";
import Icono from "../svg";

const NavbarDP = ({ id, name, resetData }) => {
  const history = useHistory();
  const goBack = () => {
    resetData();
    history.goBack();
  };

  return (
    <NavbarDPStyle>
      <Icono icono="back" width="2em" height="2em" onClick={goBack} />
      <span className="pokemon-name">{name === undefined ? "..." : name}</span>
      <PokemonID layoutId={`pokemon-id-${id}`}>
        #{`${id}`.padStart(3, 0)}
      </PokemonID>
    </NavbarDPStyle>
  );
};

const PokemonID = styled(motion.span)`
  font-size: 1.25em;
  font-weight: 200;
`;

const NavbarDPStyle = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25em;
  color: rgb(var(--white));

  svg {
    cursor: pointer;
  }
  .pokemon-name {
    font-size: 1.25rem;
    text-transform: capitalize;
  }
`;

export default NavbarDP;
