import { styled } from "styled-components"
import PokeballFondo from "../assets/PokeballFondo"

interface CardSimpleType {
    titulo: string
    margin?: boolean 
}

const CardSimple = ({ titulo, margin }: CardSimpleType) => {
    return (
        <CardSimpleStyle className={`shadow ${titulo} ${margin && 'margin-top'}`}>
            <h2>{titulo}</h2>
            <span><PokeballFondo /></span>
        </CardSimpleStyle>
    )
}

const CardSimpleStyle = styled.div`
  border-radius: 1.25em;
  padding: 1.25em;
  background: rgb(var(--white));
  position: relative;
  z-index: inherit;
  overflow: hidden;
  width: 100%;
  flex: 1;

  &.pokédex {
    background: var(--g-green);
  }
  &.items {
    background: var(--g-red);
  }
  &.moves {
    background: var(--g-blue);
  }
  &.types {
    background: var(--g-yellow);
  }
  &.abilities {
    background: var(--g-purpure);
  }
  &.pokédex,
  &.items,
  &.moves,
  &.types,
  &.abilities {
    color: rgb(var(--white));
  }

  h2 {
    margin-top: 2.5em;
    text-transform: capitalize;
    word-wrap: break-word;
    user-select: none;
  }

  span {
    position: absolute;
    bottom: -5em;
    right: -5em;
    transform: scale(0.75) rotate(25deg);
    opacity: 0.3;
    user-select: none;
    pointer-events: none;
  }
`

export default CardSimple