import { Link } from "react-router-dom";
import styled from "styled-components";

import { BasePageStyle, Row } from "../components/GlobalStyle";
import CardSimple from "../components/Card/simple";

const HomePage = () => {
  return (
    <HomeStyle>
      <h1>Home</h1>
      <Link to="/pokedex">
        <CardSimple titulo="pokédex" />
      </Link>
      <Row className="row">
        <Link to="/items">
          <CardSimple titulo="items" />
        </Link>
        <Link to="/types">
          <CardSimple titulo="types" />
        </Link>
      </Row>
      <Row className="row">
        <Link to="/ability">
          <CardSimple titulo="abilities" />
        </Link>
      </Row>
    </HomeStyle>
  );
};

const HomeStyle = styled(BasePageStyle)`
  height: 100%;

  h1 {
    @media screen and (min-width: 375px) {
      font-size: 3rem;
    }
  }

  .row {
    margin-top: 20px;
    gap: 20px;

    a {
      flex: 1;
    }
  }
`;
export default HomePage;
