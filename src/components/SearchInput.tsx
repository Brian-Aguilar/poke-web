import { styled } from "styled-components";
import Icono from "../assets/SVG";
import { FormEvent } from "react";

interface SearchInputType {
    base: string
}

const SearchInput = ({ base }: SearchInputType) => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = e.target.children.search.value.replaceAll(" ", "-")
        if (data != " " && data != null) {
            console.log(data)
            history.pushState("", "", `#/pokedex/search/${data}`)
            // pokedex/search/data
            e.target.reset()
        }
    }

    return (<SearchStyle onSubmit={handleSubmit}>
        <input
            name="search"
            placeholder={`Buscar ${base === "pokedex" ? "pókemon" : base}`}
            type="text"
            autoFocus
            autoComplete="off"
        />
        <button type="submit">
            <Icono icono="search" />
        </button>
    </SearchStyle>)
}

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
`

export default SearchInput