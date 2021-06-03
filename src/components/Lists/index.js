import { memo, useCallback } from "react";
import styled from "styled-components";
import CardItem from "../Card/items";
import CardPokemon from "../Card/pokemon";
import LoadPokeball from "../svg/load";

const ListBase = ({ data, getData, type }) => {
  const loadMore = useCallback(() => {
    getData(data.next);
  }, [getData, data.next]);

  return (
    <>
      <ListBaseStyle>
        {type === "pokemon" &&
          data.datos.map((dato) => (
            <CardPokemon key={`${dato.name}-${dato.id}`} dato={dato} />
          ))}

        {type === "item" &&
          data.datos.map((dato) => (
            <CardItem key={`${dato.name}-${dato.id}`} dato={dato} />
          ))}
      </ListBaseStyle>

      {data.isLoading ? (
        <LoadingController>
          <LoadPokeball />
        </LoadingController>
      ) : (
        <Button onClick={loadMore}>Load more</Button>
      )}
    </>
  );
};

const ListBaseStyle = styled.div`
  margin: 2em 0;
`;
const LoadingController = styled.div`
  padding: 1.25em;
  margin-top: 1.25em;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Button = styled.button`
  margin: 0 auto;
  display: block;
  padding: 0.5em 1.25em;
  font-size: 1.5rem;
  border-radius: 1.25em;
  border: 0;
  background: var(--g-yellow);
  cursor: pointer;

  :hover {
    transform: scale(1.25);
  }
`;

export default memo(ListBase);
