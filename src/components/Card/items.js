import styled from "styled-components";
import { nameItem } from "../../utils/pokemons";
import BadgeItems from "../Badge/items";
import LoadImage from "../image/load";

const CardItem = ({ dato }) => {
  return (
    <CardItemStyle>
      <div className="item-left">
        <span>{nameItem(dato.name)}</span>
        <BadgeItems name={dato.cost} />
      </div>
      <div className="item-right">
        <LoadImage srcURL={dato.image} />
      </div>
    </CardItemStyle>
  );
};

const CardItemStyle = styled.div`
  background: linear-gradient(
    to left,
    rgba(var(--shadow), 0.25),
    rgb(var(--shadow))
  );
  padding: 1.25em;
  width: 100;
  border-radius: 1.25em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25em;

  .item-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    span:nth-child(1) {
      text-transform: capitalize;
      font-size: 1.2rem;
    }
  }
  .item-right {
    div {
      img {
        transform: scale(2.5);
      }
    }
  }

  &:hover {
    background: linear-gradient(
      to left,
      rgb(var(--shadow)),
      rgba(var(--shadow), 0.25)
    );
  }
`;

export default CardItem;
