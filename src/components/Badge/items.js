import styled from "styled-components";
import pokeCoin from "../../images/pokemon_coin.svg";

const BadgeItems = ({ name }) => {
  return (
    <BadgeItemsStyle>
      <img src={pokeCoin} alt="pokecoin" />
      {name}
    </BadgeItemsStyle>
  );
};

const BadgeItemsStyle = styled.span`
  background: rgba(var(--yellow), 0.5);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  max-width: 100px;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 30px;
  }
`;

export default BadgeItems;
