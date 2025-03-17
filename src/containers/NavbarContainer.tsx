import { styled } from "styled-components"
import Icono from "../assets/SVG"
import { useLocation } from "react-router-dom"

const NavbarPokedexContainer = () => {
  const location = useLocation()

  return (
    <NavbarPokedexStyle>
      <span role="button" onClick={() => {history.back()}}>
        {location.pathname !== "/" && <Icono icono="back" />}
      </span>
      <span role="button" onClick={() => { }}>
        <Icono icono="language" />
      </span>
    </NavbarPokedexStyle>
  )
}


const NavbarPokedexStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }

  .menu {
    background-color: rgba(var(--white), 0.95);
    position: absolute;
    top: 0;
    right: 0;
    width: 75%;
    height: 100%;
    transform: translateX(120%);
    transition: transform 300ms ease-in;
    z-index: 10;

    .close_menu {
      position: absolute;
      top: 0;
      right: 0;
      padding: 1.25em;
    }

    .contenido {
      list-style: none;
      display: flex;
      flex-direction: column;
      margin-top: 4em;
      padding: 1.25em;
      gap: 1.25em;

      select {
        width: 100%;
        font-size: 1.25em;
        padding: 0.5em;
      }
    }

    &.active {
      transform: translateX(0);
    }
  }
`

export default NavbarPokedexContainer