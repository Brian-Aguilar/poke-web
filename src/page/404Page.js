import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const NotFoundPage = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  return (
    <NotFoundStyle
      variants={notFoundAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.svg
        viewBox="0 0 1027 392"
        variants={svgAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <g id="Capa_2" data-name="Capa 2">
          <g id="_0" data-name="0">
            <motion.g id="cuerpo" variants={snorlaxAnimation}>
              <path
                id="panza"
                className="cls-1"
                d="M666.5,196.36V197c0,83.12-67.6,150.5-151,150.5a150.74,150.74,0,0,1-87.2-27.6c-4.58-26.64-4.92-56.16-.18-86.69a281.75,281.75,0,0,1,13.46-52.79,238.89,238.89,0,0,1,52-19.86C564.81,142.41,633.33,158.33,666.5,196.36Z"
              />
              <path
                id="brazo_mano"
                className="cls-2"
                d="M483,297.53c-20.25,6.51-40.2,8.14-56.93,5.6q.87,8.55,2.28,16.77a150.92,150.92,0,0,1-56.55-76.7c14.49-24.34,38.84-46.48,69.83-62.78Q437.28,192.27,434,205a144.9,144.9,0,0,1,17.07-6.69c45.93-14.76,90.31-4.51,99.12,22.91S528.88,282.77,483,297.53Z"
              />
              <g id="unas_de">
                <path
                  className="cls-3"
                  d="M627,155a9,9,0,0,1-9,9c-5,0-18-8-18-13s13-5,18-5A9,9,0,0,1,627,155Z"
                />
                <path
                  className="cls-3"
                  d="M626.6,171.73a9,9,0,0,1-6.55,10.91c-4.82,1.21-19.41-3.42-20.62-8.25s11.43-8,16.25-9.21A9,9,0,0,1,626.6,171.73Z"
                />
                <path
                  className="cls-3"
                  d="M632.92,186c5.43,2.52,8.14,8.22,6.05,12.73s-16.36,12.25-21.79,9.73,0-14.35,2.11-18.86S627.48,183.51,632.92,186Z"
                />
                <path
                  className="cls-3"
                  d="M649.94,191.45c5.17.07,9.32,3.62,9.26,7.93s-8.55,15.51-13.71,15.45-5.06-11.38-5-15.69S644.78,191.39,649.94,191.45Z"
                />
              </g>
              <g id="unas_iz">
                <path
                  className="cls-3"
                  d="M539.58,251.14a9,9,0,0,1,9.88-8c4.95.51,17.08,9.85,16.56,14.79s-13.47,3.63-18.42,3.12A9,9,0,0,1,539.58,251.14Z"
                />
                <path
                  className="cls-3"
                  d="M544.75,234.56a9,9,0,0,1,7.9-10c4.94-.58,18.81,5.9,19.38,10.83s-12.37,6.47-17.3,7.05A9,9,0,0,1,544.75,234.56Z"
                />
                <path
                  className="cls-3"
                  d="M545.86,218.87c-4.19-4.28-4.7-10.57-1.15-14.05s19.64-5.66,23.82-1.38-5.1,13.42-8.65,16.89S550.05,223.15,545.86,218.87Z"
                />
                <path
                  className="cls-3"
                  d="M531.86,207.77c-4.81-1.89-7.43-6.68-5.85-10.69s13.49-11.48,18.29-9.59.7,12.42-.88,16.44S536.67,209.66,531.86,207.77Z"
                />
              </g>
            </motion.g>
            <motion.path
              variants={fourAnimation}
              className="cls-4"
              d="M515.5,3.5c-107,0-194,86.8-194,193.5a192.11,192.11,0,0,0,37.19,113.8A193.83,193.83,0,0,0,515.5,390.5c107,0,194-86.8,194-193.5S622.47,3.5,515.5,3.5Zm0,344A150.44,150.44,0,0,1,364.5,197c0-83.12,67.6-150.5,151-150.5s151,67.38,151,150.5S598.9,347.5,515.5,347.5Z"
            />
            <motion.ellipse
              id="Mano"
              className="cls-2"
              cx="645.17"
              cy="168.6"
              rx="31.33"
              ry="34.13"
              variants={snorlaxAnimation}
              transform="translate(-19.75 219.14) rotate(-18.99)"
            />
            <motion.g id="caebza" variants={snorlaxAnimation}>
              <path
                className="cls-2"
                d="M524,82c-3,0-4-10-4-10-15-29-30-30-30-30-8.82,2.94-17.64,21-21.69,30.37C437.81,75,416.47,91,406.46,100.32,361.71,87.43,358,105,358,105c-8.75,22.76,13.14,49.35,18.74,55.62A62.37,62.37,0,0,0,374,179c0,16.14,6,30.62,15.61,40.52,13.77-14.9,31.41-28.28,52-39.1a238.89,238.89,0,0,1,52-19.86A232.63,232.63,0,0,1,568,153.67a66.07,66.07,0,0,0,2-16.17C570,106.85,549.41,82,524,82Z"
              />
              <path
                className="cls-1"
                d="M564.29,115.5C560.58,83.74,526.87,61.58,489,66c-.83.1-1.65.21-2.47.33a3.35,3.35,0,0,0-2.45,1.75l-7.93,14.79a3.37,3.37,0,0,1-3.53,1.73L446,80.16a13.87,13.87,0,0,0-5.37.17C411.11,87.2,391,116.7,394.75,149.24a65,65,0,0,0,25,44.39c6.84-4.73,14.56-7.57,22.28-11.63,15.76-8.29,32.81-16.65,51.59-21.44C514,155.35,533.77,153.88,553,154,561.21,143.08,565.87,129.05,564.29,115.5Z"
              />
              <g id="boca">
                <path
                  className="cls-5"
                  d="M542.48,157.85a12.92,12.92,0,0,1-5,2.65c-3.62,1-9,2.34-15.34,3.82-14.26,3.34-33.2,7.47-46.89,10.41-10.4,2.22-17.77,3.77-17.77,3.77a6,6,0,0,1-2,.33c-4.39.11-15.79-2.7-31.73-29.42a5.76,5.76,0,0,1,1-7.19c11.75-11,54.58-44.63,121-25.81a5.75,5.75,0,0,1,4.16,5C550.8,129.88,551.68,150,542.48,157.85Z"
                />
                <path
                  className="cls-6"
                  d="M550,121.38a5.75,5.75,0,0,0-4.16-5c-28.35-8-52.39-6.5-71.56-1.27,14.4,3.53,39.1,14.61,47.16,49.35,6.64-1.55,12.33-2.94,16.09-4C552,156.48,550.93,131.19,550,121.38Z"
                />
                <path
                  id="diente_de"
                  className="cls-3"
                  d="M542.48,157.85a12.92,12.92,0,0,1-5,2.65c-3.62,1-9,2.34-15.34,3.82a10.85,10.85,0,0,1-1.59-4.55c-.7-6,1.9-18.57,7.93-19.27s13.23,10.7,13.93,16.73C542.45,157.44,542.47,157.65,542.48,157.85Z"
                />
                <path
                  id="diente_iz"
                  className="cls-3"
                  d="M475.27,174.73c-10.4,2.22-17.77,3.77-17.77,3.77a6,6,0,0,1-2,.33,10.87,10.87,0,0,1-1.93-5.06c-.7-6,1.9-18.57,7.93-19.27s13.23,10.7,13.93,16.73A10.75,10.75,0,0,1,475.27,174.73Z"
                />
              </g>
              <g id="ojos">
                <path
                  id="ojo_de"
                  className="cls-7"
                  d="M497.29,94.36a18.44,18.44,0,0,1,4.67-9.8,18,18,0,0,1,10.17-5.87,14.25,14.25,0,0,1,1.6-.19,12.68,12.68,0,0,1,1.63,0,16,16,0,0,1,3.24.47,15.22,15.22,0,0,1,5.55,2.84,15.72,15.72,0,0,1,5.55,9.58l-.4.3-1.59-1.84c-.58-.57-1.12-1.17-1.72-1.7a19.46,19.46,0,0,0-1.85-1.55c-.32-.24-.63-.49-1-.71l-1-.62a14.91,14.91,0,0,0-4.44-1.66,13.26,13.26,0,0,0-4.7,0,19.6,19.6,0,0,0-8.56,4.09,39.54,39.54,0,0,0-6.74,6.94Z"
                />
                <path
                  id="ojo_iz"
                  className="cls-7"
                  d="M420.25,122.45a21.53,21.53,0,0,1-.15-6.7,25.16,25.16,0,0,1,1.72-6.55,22.71,22.71,0,0,1,3.69-6.12c.4-.47.86-.91,1.29-1.36s1-.86,1.44-1.28,1.07-.75,1.61-1.12,1.15-.66,1.74-1a18.82,18.82,0,0,1,3.81-1.3,14.77,14.77,0,0,1,2-.29c.33,0,.66-.08,1-.09s.65,0,1,0a18.17,18.17,0,0,1,7.26,1.69,22.51,22.51,0,0,1,10,8.92l-.3.4a38.82,38.82,0,0,0-10.88-5.49,15.89,15.89,0,0,0-11.71.64,20.45,20.45,0,0,0-8.48,8.36,37.22,37.22,0,0,0-2.65,5.51,40,40,0,0,0-1.88,5.83Z"
                />
              </g>
            </motion.g>
          </g>
          <g id="_4_iz" data-name="4_iz">
            <motion.path
              className="cls-4"
              variants={fourAnimation}
              d="M290,254H238V0H178L0,254v52H178v86h60V306h52ZM59,254,178,74V254Z"
            />
          </g>
          <g id="_4_de" data-name="4_de">
            <motion.path
              className="cls-4"
              variants={fourAnimation}
              d="M1027,254H975V0H915L737,254v52H915v86h60V306h52Zm-231,0L915,74V254Z"
            />
          </g>
        </g>
      </motion.svg>

      <motion.h2 variants={textAnimation}>
        <span>¡UPS! </span> ¡Un Snorlax salvaje ha bloqueado tu camino!
      </motion.h2>

      <ButtonBack onClick={goBack}>Regresar</ButtonBack>
    </NotFoundStyle>
  );
};

const svgAnimation = {
  hidden: { y: -1000 },
  show: { y: 0, transition: { straggerChildren: 0.3, delayChildren: 0.2 } },
  exit: {},
};
const fourAnimation = {
  hidden: {
    fillOpacity: 0,
    strokeDasharray: 1250,
    strokeDashoffset: 1250,
    strokeOpacity: 1,
  },
  show: {
    fillOpacity: [0, 0, 1],
    strokeDasharray: 0,
    strokeDashoffset: 0,
    stroke: "transparent",
    strokeOpacity: 0,
    transition: { duration: 1.5 },
  },
  exit: {},
};
const snorlaxAnimation = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: [0, 0, 1],
    scale: [0, 0, 1],
    transition: { duration: 1, delay: 1 },
  },
  exit: {},
};

const textAnimation = {
  hidden: { x: -200, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1 } },
  exit: {},
};
const notFoundAnimation = {
  hidden: {},
  show: { transition: { straggerChildren: 0.3, delayChildren: 0.2 } },
  exit: {},
};

const NotFoundStyle = styled(motion.div)`
  background-color: #135063;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 901;

  svg {
    max-width: 90vw;
    .cls-1 {
      fill: #ffedc9;
    }
    .cls-2 {
      fill: #136781;
    }
    .cls-3 {
      fill: #fff;
    }
    .cls-4 {
      fill: #ffe534;
      /* fill-opacity: 0;
      stroke-dasharray: 250; */
      stroke: #ffe534;
      stroke-width: 5px;
    }
    .cls-5 {
      fill: #fe0000;
    }
    .cls-6 {
      fill: maroon;
    }
    .cls-7 {
      fill: #2b2b2b;
    }

    @media screen and (min-width: 760px) {
      max-width: 60vw;
    }
  }

  h2 {
    margin-top: 2em;
    font-size: 1.5rem;
    text-align: center;
    color: white;
    padding: 0 0.5em;
    span {
      color: rgb(var(--yellow));
      font-size: 2rem;
    }
    @media screen and (min-width: 760px) {
      font-size: 2rem;

      span {
        font-size: 2.5rem;
      }
    }
  }
`;

const ButtonBack = styled(motion.button)`
  margin-top: 1em;
  padding: 1rem 2rem;
  background-color: rgb(var(--yellow));
  color: white;
  border: none;
  font-size: 1.5rem;
  border-radius: 1em;
  box-shadow: 0 5px 30px rgba(var(--yellow), 0.5);
`;

export default NotFoundPage;
