import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --black : 43, 43, 43;
    --shadow: 224, 229, 233
  }
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;

  }
  body {
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: rgb(var(--black))
  }

  .shadow {
    box-shadow: 0 16px 20px 2px rgb(var(--shadow))
  }

  .page-base {
    padding: 3rem;
    
    @media screen and (max-width: 764px) {
      padding: 3rem 1rem;
    }
  }
`;

export default GlobalStyle;
