import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import LoadPokeball from "../svg/load";

const LoadImage = ({ srcURL }) => {
  const [load, setLoad] = useState(false);
  return (
    <LoadImageStyle>
      <AnimatePresence exitBeforeEnter="">
        {load === false && <LoadPokeball />}
      </AnimatePresence>

      <img src={srcURL} alt={srcURL} onLoadCapture={() => setLoad(true)} />
    </LoadImageStyle>
  );
};

const LoadImageStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default LoadImage;
