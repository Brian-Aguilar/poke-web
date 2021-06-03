import styled from "styled-components";
import pokeballFondo from "../../images/pokeball_fondo.svg";

const CardSimple = ({ titulo }) => {
  return (
    <CardSimpleStyle className={`shadow ${titulo}`}>
      <h2>{titulo}</h2>
      <img src={pokeballFondo} alt="imagen" />
    </CardSimpleStyle>
  );
};

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

  img {
    position: absolute;
    bottom: -5em;
    right: -5em;
    transform: scale(0.75) rotate(25deg);
    opacity: 0.3;
    user-select: none;
    pointer-events: none;
  }
`;

export default CardSimple;
