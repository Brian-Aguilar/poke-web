import { memo, useRef } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { usePokemon } from "../../R";
import Icono from "../svg";

/**
 * TODO: "obtener datos de la api con el idioma seleccionado."
 *
 */

const NavbarPokedex = () => {
  const menuRef = useRef();
  const history = useHistory();
  const location = useLocation();

  const {
    languagesState: { languages, language },
    languageDispatch,
  } = usePokemon();

  const goBack = () => {
    history.goBack();
  };

  const openMenu = () => {
    menuRef.current.classList.toggle("active");
  };
  const changeSelect = (e) => {
    const id = parseInt(e.target.value);
    languageDispatch({
      type: "SELECT_LANGUAGE",
      payload: languages.filter((l) => l.id === id)[0],
    });
  };

  return (
    <NavbarPokedexStyle>
      {location.pathname === "/" ? (
        <span></span>
      ) : (
        <Icono icono="back" width="2em" height="2em" onClick={goBack} />
      )}

      <span role="button" onClick={openMenu}>
        <Icono icono="language" width="2em" height="2em" />
      </span>

      <div className="menu shadow" ref={menuRef}>
        <span role="button" onClick={openMenu} className="close_menu">
          <Icono icono="close" width="2em" hegiht="2em" />
        </span>
        <ul className="contenido">
          <li>
            <select defaultValue={language.id} onChange={changeSelect}>
              {languages.map((data) => (
                <option key={`${data.id}-${data.name}`} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </div>
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
`;

export default memo(NavbarPokedex);
