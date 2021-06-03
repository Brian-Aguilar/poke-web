import { useHistory } from "react-router";
import styled from "styled-components";
import Icono from "../svg";

const SearchInput = ({ base }) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${base}/search/${e.target.children.search.value}`);
    e.target.children.search.value = "";
  };

  return (
    <SearchStyle onSubmit={handleSubmit}>
      <input
        name="search"
        placeholder={`Buscar ${base === "pokedex" ? "pókemon" : base}`}
        type="text"
        autoFocus
        autoComplete="off"
      />
      <button type="submit">
        <Icono icono="search" width="1.75em" height="1.75em" />
      </button>
    </SearchStyle>
  );
};

const SearchStyle = styled.form`
  background: rgba(var(--shadow), 0.6);
  border-radius: 1.25em;
  padding: 1em 1.25em;
  display: flex;
  align-items: center;

  input[type="text"] {
    width: 100%;
    font-size: 1.5rem;
    margin-right: 5px;
    appearance: none;
    outline: none;
    border: 0;
    background: transparent;
    font-weight: light;
  }
  button {
    appearance: none;
    outline: none;
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;

export default SearchInput;
