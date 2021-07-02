import styled from "styled-components";
import CardItem from "../Card/items";
import CardPokemon from "../Card/pokemon";
import LoadPokeball from "../svg/load";

const ListNormal = ({ data, type, isLoading }) => {
  return (
    <ListNormalStyle>
      {isLoading && (
        <LodingContainer>
          <LoadPokeball />
        </LodingContainer>
      )}
      {data.length !== 0 ? (
        <>
          {type === "search" &&
            data.map((dato) => <CardItem key={`sp-${dato.id}`} dato={dato} />)}
          {type === "pokemon" &&
            data.map((dato) => (
              <CardPokemon key={`cp-${dato.id}`} dato={dato} />
            ))}
        </>
      ) : (
        <h2>No hay Items</h2>
      )}
    </ListNormalStyle>
  );
};

const ListNormalStyle = styled.div`
  margin-top: 2em;

  h2 {
    width: 100%;
    text-align: center;
  }
`;
const LodingContainer = styled.div`
  padding: 1.25em;
  margin-top: 1.25em;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default ListNormal;
