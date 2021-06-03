import { AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { nameStat } from "../../utils/pokemons";
import Badge from "../Badge";
import CardInfoAnimation from "../Card/info";

const ListCardInfo = ({ datos, color }) => {
  const [cardActive, setCardActive] = useState(1);
  const handleActive = (n) => {
    setCardActive(n);
  };
  return (
    <ListStyle>
      <AnimateSharedLayout type="crossfade">
        <CardInfoAnimation
          title="info"
          top={true}
          index={1}
          active={cardActive}
          change={handleActive}
          icon={true}
          iconName="info"
          color={color}
        >
          <InfoContent>
            <li>
              <span>Abilities:</span>
              <span>
                {datos?.pokemon_v2_pokemonabilities?.map((d, i) => (
                  <Tag key={`ability-${i}`}>{d.pokemon_v2_ability.name}</Tag>
                ))}
              </span>
            </li>
            <li>
              <span>Base Ex.:</span>
              <span>{datos.base_experience}</span>
            </li>
            <li>
              <span>Height:</span>
              <span>{datos.height}</span>
            </li>
            <li>
              <span>Weight:</span>
              <span>{datos.weight !== undefined && datos.weight * 0.1}</span>
            </li>
          </InfoContent>
        </CardInfoAnimation>
        <CardInfoAnimation
          title="stats"
          index={2}
          active={cardActive}
          change={handleActive}
          icon={true}
          iconName="stats"
          color={color}
        >
          <StatsContent>
            {datos?.pokemon_v2_pokemonstats?.map((d) => (
              <li key={`${d.pokemon_v2_stat.name}-${d.base_stat}`}>
                <span>{nameStat(d.pokemon_v2_stat.name)}</span>
                <span>{d.base_stat}</span>
                <StatsBar
                  porcentaje={d.base_stat}
                  className={d.pokemon_v2_stat.name}
                ></StatsBar>
              </li>
            ))}
          </StatsContent>
        </CardInfoAnimation>
        <CardInfoAnimation
          title="evolution"
          index={3}
          active={cardActive}
          change={handleActive}
          icon={true}
          iconName="evolution"
          color={color}
        >
          <EvolutionContent>
            {datos?.pokemon_v2_pokemonspecy?.pokemon_v2_evolutionchain?.pokemon_v2_pokemonspecies?.map(
              (d, i) => (
                <PokemonE key={`${d.name}-${d.id}-${i}`}>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${d.id}.png`}
                    alt={`${d.name}-${d.id}`}
                  />
                  <span>{d.name}</span>
                  <div className="e-types-pokemon">
                    {d.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.map(
                      (b, i) => (
                        <Badge
                          key={`type-evo-${i}`}
                          nombre={b.pokemon_v2_type.name}
                        />
                      )
                    )}
                  </div>
                </PokemonE>
              )
            )}
          </EvolutionContent>
        </CardInfoAnimation>
      </AnimateSharedLayout>
    </ListStyle>
  );
};

const ListStyle = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;
const Tag = styled.span`
  padding: 0.25em;
  margin: 0 5px;
  background: rgba(var(--shadow), 0.75);
  border-radius: 0.25em;
  user-select: none;
`;

const InfoContent = styled.ul`
  list-style: none;
  li {
    padding: 0.5em 0;
    display: flex;
    span:nth-child(1) {
      flex: 1;
    }
    span:nth-child(2) {
      flex: 3;
      color: black;
    }
  }
`;
const StatsContent = styled.ul`
  list-style: none;
  li {
    padding: 1em 0;
    display: flex;
    align-items: center;
    span:nth-child(1) {
      text-transform: capitalize;
      flex: 1.25;
      text-align: right;
    }
    span:nth-child(2) {
      text-align: center;
      flex: 0.75;
    }
  }
`;
const StatsBar = styled.div`
  flex: 3;
  width: 100%;
  background: rgb(var(--shadow));
  height: 5px;
  border-radius: 10em;
  display: block;
  overflow: hidden;
  position: relative;

  ::before {
    content: "";
    border-radius: 10em;
    width: ${(props) => `${props.porcentaje}%`};
    height: 100%;
    background: red;
    position: absolute;
    top: 0;
    left: 0;
  }
  &.hp::before,
  &.defense::before {
    background-color: rgb(var(--red)) !important;
  }
  &.attack::before,
  &.special-attack::before,
  &.special-defense::before {
    background-color: rgb(var(--yellow)) !important;
  }
  &.speed::before {
    background-color: rgb(var(--green)) !important;
  }
`;

const EvolutionContent = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
  align-items: center;
`;

const PokemonE = styled.div`
  max-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    background: rgba(var(--shadow), 7);
    border-radius: 1em;
    width: 100%;
  }
  span {
    text-transform: capitalize;
    margin-top: 3px;
  }
  .e-types-pokemon {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  @media screen and (min-width: 375px) {
    max-width: 125px;
  }
`;

export default ListCardInfo;
