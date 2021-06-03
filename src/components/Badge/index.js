import styled from "styled-components";

import bug from "../../images/bug.svg";
import dark from "../../images/dark.svg";
import dragon from "../../images/dragon.svg";
import electric from "../../images/electric.svg";
import fairy from "../../images/fairy.svg";
import figthing from "../../images/figthing.svg";
import fire from "../../images/fire.svg";
import flying from "../../images/flying.svg";
import ghost from "../../images/ghost.svg";
import grass from "../../images/grass.svg";
import ground from "../../images/ground.svg";
import ice from "../../images/ice.svg";
import normal from "../../images/normal.svg";
import posion from "../../images/posion.svg";
import psychic from "../../images/psychic.svg";
import rock from "../../images/rock.svg";
import steel from "../../images/steel.svg";
import water from "../../images/water.svg";

const imageTypes = (type) => {
  switch (type) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return figthing;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return posion;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    default:
      return normal;
  }
};

const Badge = ({ nombre }) => {
  return (
    <BadgeStyle className={`${nombre}`}>
      <img src={imageTypes(nombre)} alt={`type-${nombre}`} />
      <span>{nombre}</span>
    </BadgeStyle>
  );
};

const BadgeStyle = styled.div`
  user-select: none;
  padding: 0.25em 0.5em;
  display: flex;
  align-items: center;
  background: rgba(var(--green), 0.7);
  border-radius: 0.5em;
  img {
    height: 100%;
    max-width: 1.5em;
    margin-right: 0.5em;
  }
  span {
    color: rgb(var(--white));
    text-transform: capitalize;
    width: 100%;
    text-align: center;
  }

  &.bug,
  &.grass,
  &.steel {
    background: rgba(var(--green), 0.9);
  }
  &.dark,
  &.normal {
    background: rgba(var(--black), 0.7);
  }
  &.flying,
  &.ghost,
  &.water,
  &.dragon,
  &.ice {
    background: rgba(var(--blue), 0.8);
  }
  &.fire,
  &.ground,
  &.rock {
    background: rgba(var(--orange), 0.5);
  }
  &.poison,
  &.fairy {
    background: rgba(var(--purpure), 0.5);
  }
  &.fighting,
  &.psychic {
    background: rgba(var(--red), 0.7);
  }
  &.electric {
    background: rgba(var(--yellow), 0.7);
  }
`;

export default Badge;
