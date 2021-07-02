import { motion } from "framer-motion";
import styled from "styled-components";

const LoadPokeball = () => {
  return (
    <PokeballSVG
      viewBox="0 0 477 395.38"
      variants={animatePokeball}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.3 }}
    >
      <motion.ellipse
        id="sombra_poke"
        className="cls-1"
        cx="247"
        cy="382.24"
        rx="100.64"
        ry="13.14"
        variants={animationShadow}
        initial="hidden"
        animate="show"
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <motion.g
        id="efectos"
        transition={{
          delay: 1,
          repeatDelay: 1,
          ease: "linear",
          repeat: Infinity,
          duration: 1,
          delayChildren: 0.3,
          staggerChildren: 0.3,
        }}
        animate={{
          scale: [0, 1, 1, 0.3, 0],
          opacity: [0, 1, 0, 0],
          y: [20, 0, 20],
        }}
      >
        <g id="cruz_01">
          <line className="cls-2" x1="463.5" y1="113" x2="463.5" y2="134" />
          <line className="cls-2" x1="474" y1="123.5" x2="453" y2="123.5" />
        </g>
        <circle id="circulo_01" className="cls-3" cx="453" cy="41" r="11" />
        <g id="cruz_02">
          <line className="cls-4" x1="387.5" y1="6" x2="387.5" y2="27" />
          <line className="cls-4" x1="398" y1="16.5" x2="377" y2="16.5" />
        </g>
        <g id="cruz_03">
          <line className="cls-5" x1="322.5" y1="26" x2="322.5" y2="47" />
          <line className="cls-5" x1="333" y1="36.5" x2="312" y2="36.5" />
        </g>
        <circle id="circulo_02" className="cls-2" cx="238" cy="14" r="11" />
        <g id="cruz_04">
          <line className="cls-6" x1="169.5" y1="22" x2="169.5" y2="43" />
          <line className="cls-6" x1="180" y1="32.5" x2="159" y2="32.5" />
        </g>
        <circle id="circulo_03" className="cls-7" cx="84" cy="15" r="11" />
        <circle id="circulo_04" className="cls-4" cx="66" cy="79" r="11" />
        <g id="cruz_05">
          <line className="cls-3" x1="13.5" y1="97" x2="13.5" y2="118" />
          <line className="cls-3" x1="24" y1="107.5" x2="3" y2="107.5" />
        </g>
      </motion.g>
      <motion.g
        id="ball"
        variants={animationBall}
        initial="hidden"
        animate="show"
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <g id="fondo">
          <path
            id="f_abajo"
            className="cls-8"
            d="M250,382.68A137.56,137.56,0,0,0,387.56,245.12H112.44A137.56,137.56,0,0,0,250,382.68Z"
            transform="translate(-3 -4)"
          />
          <path
            id="f_arriba"
            className="cls-9"
            d="M250,107.56A137.56,137.56,0,0,0,112.44,245.12H387.56A137.56,137.56,0,0,0,250,107.56Z"
            transform="translate(-3 -4)"
          />
        </g>
        <g id="lineas">
          <line
            className="cls-10"
            x1="158.95"
            y1="241.12"
            x2="382.82"
            y2="241.12"
          />
          <line
            className="cls-10"
            x1="111.2"
            y1="241.12"
            x2="128.35"
            y2="241.12"
          />
        </g>
        <g id="sombras">
          <path
            className="cls-12"
            d="M145.71,216a104,104,0,0,1,46.44-59.64"
            transform="translate(-3 -4)"
          />
          <path
            className="cls-12"
            d="M214.41,145.33a103.21,103.21,0,0,1,18.28-3.73"
            transform="translate(-3 -4)"
          />
        </g>
        <motion.circle
          id="center"
          className="cls-11"
          cx="247"
          cy="241.12"
          r="29.89"
          transition={{
            delay: 1,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
            duration: 1,
          }}
          animate={{
            x: [0, -150, 150, 0],
            scaleX: [1, 0.3, 0.3, 1],
            opacity: [1, 0, 0, 1],
          }}
        />
        <motion.path
          className="cls-13"
          d="M250.3,162.37l-12.92,17.84a2.41,2.41,0,0,0,2,3.82H246v9.87a1.56,1.56,0,0,0,2.74,1l15.43-18a2.08,2.08,0,0,0-1.58-3.43H252.2l.6-10.22A1.38,1.38,0,0,0,250.3,162.37Z"
          transform="translate(-3 -4)"
          transition={{
            delay: 1,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
            duration: 1,
          }}
          animate={{
            x: [0, -150, 150, 0],
            scaleX: [1, 0.3, 0.3, 1],
            opacity: [1, 0, 0, 1],
          }}
        />
        <path
          id="contorno"
          className="cls-10"
          d="M311.73,368.58a138.12,138.12,0,1,1,44.93-35.89"
          transform="translate(-3 -4)"
        />
      </motion.g>
      <g id="trazos">
        <g id="tazo_01">
          <motion.path
            className="cls-14"
            d="M310,222.54c25.18,1.75,50.33,4.07,75.36,7.52,12.52,1.75,25,3.77,37.38,6.49a181.1,181.1,0,0,1,18.4,4.94,63.91,63.91,0,0,1,9,3.69,22.78,22.78,0,0,1,4.22,2.81,9.45,9.45,0,0,1,1.82,2.15,5.08,5.08,0,0,1,.73,3.17,5.46,5.46,0,0,1-1.29,2.9,10.18,10.18,0,0,1-2,1.87,24.66,24.66,0,0,1-4.44,2.41,65.24,65.24,0,0,1-9.21,3,183.88,183.88,0,0,1-18.73,3.69c-12.55,1.89-25.16,3.07-37.78,4-25.24,1.8-50.53,2.47-75.8,2.56-50.55,0-101.15-1.59-151.47-7-25.14-2.83-50.26-6.22-75-11.86-6.18-1.45-12.35-3-18.42-5-3-1-6.06-2.08-9-3.38a48.07,48.07,0,0,1-4.37-2.18,20.14,20.14,0,0,1-4.12-3,8.63,8.63,0,0,1-1.71-2.2,5,5,0,0,1-.54-3.1,5.47,5.47,0,0,1,1.38-2.66,10.71,10.71,0,0,1,2-1.7,34.09,34.09,0,0,1,9-3.72A130.32,130.32,0,0,1,74,224.41l.1.59c-3.1.62-6.18,1.28-9.23,2.05s-6.08,1.57-9,2.58a32.29,32.29,0,0,0-8.25,3.9,4.89,4.89,0,0,0-2.23,2.91,2.4,2.4,0,0,0,.37,1.46A6.53,6.53,0,0,0,47,239.34a18.39,18.39,0,0,0,3.67,2.38,44.69,44.69,0,0,0,4.17,1.85c2.87,1.13,5.84,2.05,8.84,2.9,6,1.68,12.12,3.05,18.27,4.26,12.32,2.38,24.75,4.28,37.23,5.87s25,3,37.52,4.15,25.07,2.28,37.63,3.16,25.13,1.8,37.7,2.46q37.72,2.2,75.54,2.6c25.19.21,50.4-.15,75.53-1.65,12.56-.77,25.11-1.8,37.54-3.52a185.21,185.21,0,0,0,18.43-3.4,63.33,63.33,0,0,0,8.79-2.77,22.33,22.33,0,0,0,3.89-2,4.42,4.42,0,0,0,2.12-2.62c.17-.79-.51-1.88-1.53-2.81a19.45,19.45,0,0,0-3.61-2.47,60.51,60.51,0,0,0-8.48-3.65,180.31,180.31,0,0,0-18.06-5.15c-12.23-2.9-24.65-5.1-37.1-7-24.91-3.84-50-6.56-75.15-8.7Z"
            transform="translate(-3 -4)"
            fill="red"
            transition={{
              delay: 1,
              repeatDelay: 1,
              ease: "linear",
              repeat: Infinity,
              duration: 1,
            }}
            animate={{
              scaleX: [0, 1, 1, 1, 0, 0, 0],
              opacity: [0, 1, 0, 0, 0, 0, 0],
            }}
          />
        </g>
        <g id="trazo_02">
          <motion.path
            className="cls-14"
            d="M325.06,227.89c24.54,1,49.08,2.56,73.5,5.45A334.7,334.7,0,0,1,435,239.42c3,.73,6,1.54,9,2.51a43.46,43.46,0,0,1,8.71,3.77,11.42,11.42,0,0,1,3.85,3.5,4.94,4.94,0,0,1,.75,3,5.43,5.43,0,0,1-1.14,2.81,13.47,13.47,0,0,1-4,3.29,33,33,0,0,1-4.3,2.13A113,113,0,0,1,430,265.78c-6,1.36-12.11,2.47-18.19,3.46-12.17,2-24.4,3.43-36.64,4.66-24.49,2.45-49,3.92-73.63,4.87-49.14,1.74-98.4,2-147.52-1.53-24.55-1.86-49.09-4.26-73.37-8.9-6.06-1.19-12.11-2.51-18.09-4.24a92.78,92.78,0,0,1-8.88-3,43.13,43.13,0,0,1-4.32-2,19.17,19.17,0,0,1-4.09-2.82,7.62,7.62,0,0,1-1.68-2.18,4.6,4.6,0,0,1-.48-3,5.57,5.57,0,0,1,1.32-2.58,10.53,10.53,0,0,1,1.92-1.71,33.84,33.84,0,0,1,8.62-4,126.47,126.47,0,0,1,18-4.22l.12.59c-3,.73-5.94,1.5-8.88,2.37s-5.84,1.79-8.66,2.89a32.45,32.45,0,0,0-7.86,4.13,5.14,5.14,0,0,0-2.14,2.91,3.37,3.37,0,0,0,1.55,2.78,17.51,17.51,0,0,0,3.59,2.21,40.07,40.07,0,0,0,4.1,1.69,90.16,90.16,0,0,0,8.68,2.53c5.89,1.42,11.88,2.56,17.91,3.51,12,1.87,24.21,3.28,36.39,4.38s24.4,2,36.63,2.68,24.45,1.32,36.7,1.74,24.49.85,36.74,1.06q36.77.81,73.54-.08c24.5-.64,49-1.81,73.41-4,12.2-1.08,24.38-2.39,36.48-4.19,6-.9,12.07-1.93,18-3.2a109.17,109.17,0,0,0,17.43-4.94,31.58,31.58,0,0,0,4-1.87,11,11,0,0,0,3.15-2.48,2.61,2.61,0,0,0,.62-1.36,2.07,2.07,0,0,0-.33-1.35,8.92,8.92,0,0,0-2.9-2.64,41.33,41.33,0,0,0-8.1-3.65c-2.85-1-5.78-1.82-8.73-2.59a331.45,331.45,0,0,0-36.08-6.62c-24.3-3.28-48.79-5.24-73.29-6.64Z"
            transform="translate(-3 -4)"
            transition={{
              delay: 1,
              repeatDelay: 1,
              ease: "linear",
              repeat: Infinity,
              duration: 1,
            }}
            animate={{
              scaleX: [0, 1, 1, 1, 0, 0, 0],
              opacity: [0, 1, 0, 0, 0, 0, 0],
            }}
          />
        </g>
      </g>
    </PokeballSVG>
  );
};

const animatePokeball = {
  show: { opacity: 1 },
  hidden: { opacity: 0 },
};

const PokeballSVG = styled(motion.svg)`
  display: block;
  max-width: 150px;
  width: 100%;
  margin: 0 auto;

  .cls-1 {
    fill: #8ebded;
  }
  .cls-10,
  .cls-12,
  .cls-2,
  .cls-3,
  .cls-4,
  .cls-5,
  .cls-6,
  .cls-7 {
    fill: none;
  }
  .cls-2 {
    stroke: #ec6298;
  }
  .cls-10,
  .cls-11,
  .cls-12,
  .cls-2,
  .cls-3,
  .cls-4,
  .cls-5,
  .cls-6,
  .cls-7 {
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }
  .cls-2,
  .cls-3,
  .cls-4,
  .cls-5,
  .cls-6,
  .cls-7 {
    stroke-width: 6px;
  }
  .cls-3 {
    stroke: #8ebded;
  }
  .cls-4 {
    stroke: #a33ea1;
  }
  .cls-5 {
    stroke: #ffe534;
  }
  .cls-6 {
    stroke: #f66c45;
  }
  .cls-7 {
    stroke: #96cfbc;
  }
  .cls-11,
  .cls-8 {
    fill: #dee8f9;
  }
  .cls-9 {
    fill: #f66c45;
  }
  .cls-10,
  .cls-11 {
    stroke: #2b2b2b;
  }
  .cls-10,
  .cls-11,
  .cls-12 {
    stroke-width: 15px;
  }
  .cls-12 {
    stroke: #f48369;
  }
  .cls-13 {
    fill: #ffe534;
  }
  .cls-14 {
    fill: #2b2b2b;
    stroke-width: 20px;
  }
`;

const animationBall = {
  show: { y: [0, -60, 0, -60, 0], scaleY: [1, 0.92, 1, 0.92, 1] },
  hidden: { y: 0 },
};
const animationShadow = {
  show: { scale: [1, 0.3, 1, 0.3, 1] },
  hiden: { scale: 1 },
};

export default LoadPokeball;
