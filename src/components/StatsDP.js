import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { quitarSimboloNombre } from "../utils/nombres";

const StatsDetailPokemon = ({ stats, active }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {!active && (
        <StatsStyle
          variants={statsAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <tbody>
            {stats.map((stat) => (
              <tr key={stat.stat.name}>
                <td>{quitarSimboloNombre(stat.stat.name)}</td>
                <td>{stat.base_stat}</td>
                <td>
                  <div className="bar">
                    <motion.div
                      className={`fondo ${stat.stat.name}`}
                      variants={barAnimation}
                      custom={stat.base_stat}
                      style={{ width: "0%" }}
                    ></motion.div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </StatsStyle>
      )}
    </AnimatePresence>
  );
};

const statsAnimation = {
  hidden: { x: -1000, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.3, staggerChildren: 0.3, delayChildren: 0.3 },
  },
  exit: { x: -1000, opacity: 0, position: "absolute" },
};

const barAnimation = {
  hidden: { width: 0 },
  show: (stat) => ({
    width: `${stat}%`,
    transition: { duration: 1 },
  }),
  exit: { width: 0 },
};

const StatsStyle = styled(motion.table)`
  width: 100%;
  position: relative;
  tr {
    td {
      padding: 0.5em 1em;
    }
    td:nth-child(1) {
      text-transform: capitalize;
    }
    td:nth-child(3) {
      width: 100%;
      .bar {
        width: 100%;
        height: 10px;
        position: relative;
        background: rgb(var(--shadow));
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 0 2px 1px white;

        .fondo {
          width: 100%;
          height: 100%;
          background: red;
          position: absolute;
          border-radius: 5px;
          top: 0;
          left: 0;
        }
      }
    }
  }
`;
export default StatsDetailPokemon;
