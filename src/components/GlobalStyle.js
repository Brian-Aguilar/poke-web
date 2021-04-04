import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --black : 43, 43, 43;
    --blue: 142, 189, 237;
    --green: 150, 207, 188;
    --pink: 236, 98, 152;
    --purpure: 163, 62, 161;
    --red: 246, 108, 69;
    --orange: 238, 120, 30;
    --shadow: 224, 229, 233;
    --yellow: 255, 229, 52;
  }
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: rgb(var(--shadow)) transparent;
    &::-webkit-scrollbar {
    width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgb(var(--shadow));
      border-radius: 20px;
      border: transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }

  body {
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: rgb(var(--black))
  }

  a {
    color: rgb(var(--black));
    text-decoration: none;
  }

  .shadow {
    box-shadow: 0 16px 20px 2px rgb(var(--shadow))
  }

  .margin-bottom {
    margin-bottom: 2em;
  }
  .margin-top {
    margin-top: 1em;
  }

  .overflow-x-hidden{
    overflow-x:hidden;
  }

  .hp,.defense {
    background-color: rgb(var(--red)) !important;
  }
  .attack,.special-attack,.special-defense {
    background-color: rgb(var(--yellow)) !important;
  }
  .speed {
    background-color: rgb(var(--green)) !important;
  }

`;

export default GlobalStyle;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageStyle = styled.div`
  padding: 3rem;
  position: relative;
  overflow-x: hidden;

  @media screen and (max-width: 764px) {
    padding: 3rem 1rem;
  }
`;
