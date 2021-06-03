import { useHistory } from "react-router";
import styled from "styled-components";
import Icono from "../svg";

const NavbarPokedex = () => {
  const history = useHistory();

  const goBack = () => {
    history.push("/");
  };
  return (
    <NavbarPokedexStyle>
      <Icono icono="back" width="2em" height="2em" onClick={goBack} />
      <Icono icono="language" width="2em" height="2em" />
    </NavbarPokedexStyle>
  );
};

const NavbarPokedexStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;

export default NavbarPokedex;
