import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Icon from "./svg";

const Nav = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [search, setSearch] = useState(false);

  const onClickBack = () => {
    history.goBack();
    dispatch({ type: "CLEAR_DETAILS_POKEMON" });
    document.body.style.overflow = "auto";
  };

  const searchPokemon = (e) => {
    e.preventDefault();
    setSearch(false);
    history.push(`/search/${e.target.children.pokemon.value}`);
  };

  const { datos } = useSelector((state) => state.detailPokemon);
  return (
    <NavbarStyle>
      <NavbarMenu>
        <li>
          {!datos ? (
            <Icon icon="bar" size="2em" />
          ) : (
            <Icon icon="back" size="2em" onClick={onClickBack} />
          )}
        </li>
        <li>
          <Link to="/">
            <h1>PokeWeb</h1>
          </Link>
        </li>
        <li>
          {!datos ? (
            <>
              <Icon
                icon="search"
                size="1.5em"
                onClick={() => setSearch(true)}
              />
              <AnimatePresence exitBeforeEnter>
                {search && (
                  <SearchStyle
                    key="search-content"
                    initial={{
                      width: "0%",
                    }}
                    animate={{
                      width: "80%",
                      transition: { duration: 0.3 },
                    }}
                    exit={{
                      width: "0%",
                      transition: { duration: 0.1 },
                    }}
                    onSubmit={searchPokemon}
                  >
                    <input type="search" name="pokemon" />
                    <Icon
                      icon="back"
                      size="2em"
                      onClick={() => setSearch(false)}
                    />
                  </SearchStyle>
                )}
              </AnimatePresence>
            </>
          ) : (
            <Icon icon="pokeball" size="2em" onClick={onClickBack} />
          )}
        </li>
      </NavbarMenu>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.nav`
  background-color: rgb(var(--red));
  width: 100%;
  height: 9vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  overflow: hidden;
  z-index: 900;
`;

const NavbarMenu = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    color: white;
  }
  svg {
    cursor: pointer;
  }
`;

const SearchStyle = styled(motion.form)`
  background-color: white;
  width: 0%;
  height: 80%;
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;

  input {
    display: block;
    width: 90%;
    height: 100%;
    font-size: 2.75rem;
    font-weight: lighter;
    color: rgba(var(--black), 0.75);
    padding: 0.5em 1em;
    border: none;
    outline: none;
    background-color: white;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 50px white inset !important;
      font-size: 2.75rem;
    }
  }

  svg {
    fill: rgb(var(--black));
  }
`;

export default Nav;
