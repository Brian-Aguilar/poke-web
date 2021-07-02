import styled from "styled-components";

import { BasePageStyle } from "../components/GlobalStyle";
import LoadPokeball from "../components/svg/load";

const LoadingPage = () => {
  return (
    <LoadingStyle>
      <LoadPokeball />
    </LoadingStyle>
  );
};

const LoadingStyle = styled(BasePageStyle)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoadingPage;
