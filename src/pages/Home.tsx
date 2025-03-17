import styled from "styled-components";

import { BasePageStyle, Row } from "../styles/GlobalStyle.ts";
import CardSimple from "../components/CardSimple.tsx";
import { Link } from "react-router-dom";

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
`

const HomePage = () => {
    return (
        <HomeStyle>
            <h1>Home</h1>
            <Link to="/pokedex">
                <CardSimple titulo="pokédex" />
            </Link>

            <Row className="row">
                <CardSimple titulo="items" />
                <CardSimple titulo="types" />
            </Row>

            <CardSimple titulo="abilities" margin />

        </HomeStyle>
    )
}

export default HomePage