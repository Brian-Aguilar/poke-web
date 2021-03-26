import styled from "styled-components";
import CardPokemon from "./Card";

const CardList = ({ data }) => {
  return (
    <CardListStyle>
      {data.map((pokemon) => (
        <CardPokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </CardListStyle>
  );
};

const CardListStyle = styled.div`
  /* min-height: 80vh; */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 2em;
  grid-row-gap: 3em;
  margin-top: 2em;

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;
export default CardList;
