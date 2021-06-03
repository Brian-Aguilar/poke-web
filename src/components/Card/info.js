import { motion } from "framer-motion";
import styled from "styled-components";
import Icono from "../svg";

const CardInfoAnimation = ({
  children,
  title,
  top,
  index,
  active,
  change,
  icon,
  iconName,
  color,
}) => {
  return (
    <CardInfoStyle
      layout
      className={`${top && "top"} ${active === index && "active"} ${color}`}
      sizeTop={index - 1}
    >
      <motion.div
        className="card-info-header"
        onClick={() => change(index)}
        layout
      >
        <div>
          <h4>{title}</h4>
          {icon && <Icono icono={iconName} width="1.25em" height="1.25em" />}
        </div>
        <hr />
      </motion.div>
      {active === index && <CIContent>{children}</CIContent>}
    </CardInfoStyle>
  );
};

const CardInfoStyle = styled(motion.div)`
  flex: 1;
  padding: 0.75em 0;
  background: rgb(var(--white));
  border-radius: 20px 20px 0 0;
  top: ${(props) => `${props.sizeTop * -20}px`};
  position: relative;
  color: rgb(var(--black));
  border: 2px solid rgb(var(--shadow));
  z-index: 5;
  &.top {
    top: 0;
  }
  &.active {
    background: rgb(var(--white)) !important;
    color: rgb(var(--black)) !important;
    .card-info-header {
      hr {
        border: 1px solid rgb(var(--black)) !important;
      }
    }
  }
  .card-info-header {
    padding: 0.5em 2em;
    cursor: pointer;
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h4 {
        text-transform: uppercase;
      }
    }
    hr {
      max-width: 50px;
      border: 1px solid rgb(var(--white));
    }
  }

  &.green {
    background: rgb(var(--green));
    color: rgb(var(--white));
    border: 1px solid rgb(var(--green));
  }
  &.red {
    background: rgb(var(--red));
    color: rgb(var(--white));
    border: 1px solid rgb(var(--red));
  }
  &.blue,
  &.white {
    background: rgb(var(--blue));
    color: rgb(var(--white));
    border: 1px solid rgb(var(--blue));
  }
  &.brown {
    background: rgb(var(--orange));
    color: rgb(var(--white));
    border: 1px solid rgb(var(--orange));
  }
  &.purple {
    background: rgb(var(--purpure));
    color: rgb(var(--white));
    border: 1px solid rgb(var(--purpure));
  }
  &.yellow {
    background: rgb(var(--yellow));
    color: rgb(var(--white));
    border: 1px solid rgb(var(--yellow));
  }
  &.pink {
    background: rgb(var(--pink));
    color: rgb(var(--white));
    border: 1px solid rgb(var(--pink));
  }
  &.gray {
    background: rgb(var(--black));
    color: rgb(var(--white));
    border: 1px solid rgb(var(--black));
  }

  @media screen and (min-width: 375px) {
    top: ${(props) => `${props.sizeTop * -15}px`};
    padding: 1.25em 0;
  }
`;

const CIContent = styled(motion.div)`
  padding: 0.5em 2em 2em 2em;
  height: 150px;
  overflow-y: auto;
  @media screen and (min-width: 375px) {
    height: 250px;
    padding: 1.25em 2em 0.5em 2em;
  }
`;

export default CardInfoAnimation;
