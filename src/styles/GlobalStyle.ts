import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --black : 43, 43, 43;
    --blue: 142, 189, 237;
    --green: 150, 207, 188;
    --orange: 238, 120, 30;
    --pink: 236, 98, 152;
    --purpure: 163, 62, 161;
    --red: 246, 108, 69;
    --shadow: 224, 229, 233;
    --white: 255,255,255;
    --yellow: 255, 229, 52;

    --g-green: linear-gradient(200deg, rgb(var(--green)), rgba(var(--green), .75) );
    --g-black: linear-gradient(200deg, rgba(var(--black), .75), rgba(var(--black), .5) );
    --g-blue: linear-gradient(200deg, rgb(var(--blue)), rgba(var(--blue), .75) );
    --g-orange: linear-gradient(200deg, rgba(var(--orange), .75), rgba(var(--orange), .5) );
    --g-pink: linear-gradient(200deg, rgba(var(--pink),.75), rgba(var(--pink), .5) );
    --g-purpure: linear-gradient(200deg, rgba(var(--purpure),.75), rgba(var(--purpure), .5) );
    --g-red: linear-gradient(200deg, rgb(var(--red)), rgba(var(--red), .75) );
    --g-white: linear-gradient(200deg, rgb(var(--white)), rgba(var(--white), .75) );
    --g-yellow: linear-gradient(200deg, rgba(var(--yellow), .75), rgba(var(--yellow), .4) );
  }
  *{
    box-sizing: border-box;
    margin:0;
    padding:0;
    scrollbar-color: rgb(var(--shadow)) transparent;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
    width: 0.25rem;
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
    color: rgb(var(--black));
    font-family: 'Poppins', sans-serif;
    width: 100%;
    height: 100%;
    font-size: 14px;

    @media screen and (min-width: 325px) {
      font-size: 16px;
    }
  }

  a {
    color: rgb(var(--black));
    text-decoration: none;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    min-height: 100vh;
    overflow-y: hidden;
  }

  main.main {
    max-width: 414px;
    width: 100%;
    height: 100%;
    padding: 1.25em;
    display: block;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    z-index: 1;

    > span {
      position: absolute;
      top: -3.6em;
      right: -3.8em;
      opacity: .4;
      transform: scale(1.5);
      z-index: -1;
      user-select: none;
    }

    @media screen and (min-width: 375px) {
      border-radius: 1.25em;
      max-height: 812px;
      min-height: 812px;
    }
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
`

export default GlobalStyle

export const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const BasePageStyle = styled.div`
  position: relative;
  z-index: 1;

  h1 {
    font-size: 3rem;
    margin: 1em 0 0.5em 0;
    text-transform: capitalize;
    user-select: none;
  }
`