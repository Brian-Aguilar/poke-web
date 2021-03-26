import styled from "styled-components";

const CardPokemon = ({ pokemon }) => {
  return (
    <CardStyle className="shadow">
      <h3>{pokemon.name}</h3>
      <img src={pokemon.img} alt={pokemon.name} />
      <span>#{pokemon.id}</span>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  width: 100%;
  padding: 1em;
  border-radius: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;

  h3 {
    text-transform: capitalize;
    font-weight: lighter;
    margin-left: 2em;
    font-size: 1.5rem;
  }
  img {
    display: block;
    width: 150px;
    position: relative;
    /* top: 0;
    right: 0; */
    transform: scale(1.2) translateX(-2em);
  }

  &:hover span {
    color: rgba(var(--shadow));
  }

  span {
    color: rgba(var(--shadow), 0.75);
    font-size: 3rem;
    position: absolute;
    top: 5px;
    left: 0.5em;
  }
  @media screen and (max-width: 764px) {
    flex-direction: column-reverse;
    h3 {
      margin-left: 0.5em;
    }
    img {
      transform: none;
    }
  }
`;
export default CardPokemon;
