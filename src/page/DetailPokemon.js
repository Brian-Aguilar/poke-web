import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

import { getDetailsPokemon } from "../redux/actions/pokemonsAction";
import { Column, Row } from "../components/GlobalStyle";
import { pageAnimation } from "../animations";
import LoadingPage from "./LoadingPage";
import ContentDetailPokemon from "../components/ContentDP";
import NotFoundPage from "./404Page";

const DetailPokemonPage = ({ path }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (path !== "/") {
      dispatch(getDetailsPokemon(path));
      document.body.style.overflow = "hidden";
    }
  }, [path, dispatch]);

  const [menuDetail, setMenuDetail] = useState(false);

  const handleMenuClick = (state) => {
    setMenuDetail(state);
  };

  const { datos, isLoading, isError } = useSelector(
    (state) => state.detailPokemon
  );

  const image = () => {
    if (datos?.sprites.other.dream_world.front_default === null) {
      return datos?.sprites.front_default;
    } else {
      return datos?.sprites.other.dream_world.front_default;
    }
  };

  return (
    <>
      {isError && <NotFoundPage />}
      <LoadingPage isLoading={isLoading} isError={isError} />
      <AnimatePresence exitBeforeEnter>
        {path !== "/" && datos && (
          <DetailPokemonStyle
            key="detalle-pokemon"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <ImagenSection>
              <div className="background"></div>
              <img src={image()} alt="nombre del pokemon" />
              <h2>{datos.name}</h2>

              <Row className="types">
                {datos.types.map((type) => (
                  <Badge key={`slot-${type.slot}`} className={type.type.name}>
                    {type.type.name}
                  </Badge>
                ))}
              </Row>
              <Row>
                <Column>
                  <span># {datos.id}</span>
                  <h4>N° Pokemon</h4>
                </Column>
                <Column>
                  <span>{`${(datos.height * 0.1).toFixed(2)} cm`}</span>
                  <h4>Tamaño</h4>
                </Column>
                <Column>
                  <span>{`${(datos.weight * 0.1).toFixed(2)} kg`}</span>
                  <h4>Peso</h4>
                </Column>
              </Row>
            </ImagenSection>

            <PokemonDetail>
              <MiniBar />
              <Row>
                <span
                  role="button"
                  className={!menuDetail ? "active" : ""}
                  onClick={() => handleMenuClick(false)}
                >
                  Stats
                </span>
                <span
                  role="button"
                  className={menuDetail ? "active" : ""}
                  onClick={() => handleMenuClick(true)}
                >
                  Moves
                </span>
              </Row>

              <div className="overflow-x-hidden">
                <ContentDetailPokemon
                  datos={datos}
                  contenido={menuDetail}
                  setContenido={setMenuDetail}
                />
              </div>
            </PokemonDetail>
          </DetailPokemonStyle>
        )}
      </AnimatePresence>
    </>
  );
};

const DetailPokemonStyle = styled(motion.div)`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 800;
  overflow-y: auto;
  user-select: none;

  .background {
    width: 100%;
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 801;
    background: rgb(var(--red));
    clip-path: polygon(0 0, 100% 0, 100% 36%, 0% 100%);
  }

  @media screen and (min-width: 764px) {
    flex-direction: row;
    overflow-y: hidden;
  }
`;

const ImagenSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  margin-top: 7vh;
  position: relative;
  z-index: 802;

  img {
    display: block;
    width: 50vw;
    min-width: 300px;
    max-width: 450px;
    margin: 2em 0 0 0.5em;
    position: inherit;
    z-index: 802;
  }

  h2 {
    text-transform: capitalize;
    padding: 1em 0 0.5em;
  }

  div {
    flex: 1;
  }
  .types {
    margin-bottom: 1em;
  }
  @media screen and (min-width: 764px) {
    .types {
      margin-bottom: 0;
    }
  }
`;

const Badge = styled.span`
  padding: 0.5em 1em;
  background-color: rgb(var(--black));
  color: white;
  font-size: 1em;
  border-radius: 0.8em;
  position: relative;
  z-index: 803;

  &.water,
  &.ice {
    background-color: rgba(var(--blue), 0.75);
  }
  &.grass,
  &.bug {
    background-color: rgba(var(--green), 0.75);
  }
  &.poison,
  &.psychic {
    background-color: rgba(var(--purpure), 0.75);
  }
  &.fire {
    background-color: rgba(var(--red), 0.75);
  }
  &.flying,
  &.ghost {
    background-color: rgba(var(--pink), 0.75);
  }
  &.electric,
  &.ground {
    background-color: rgba(var(--yellow), 0.75);
  }
`;

const PokemonDetail = styled.div`
  flex: 1;
  background: linear-gradient(
    to bottom,
    rgb(var(--red)),
    rgba(var(--red), 0.75)
  );
  color: white;
  margin: 0.5em 0 0;
  padding: 1.5em 0 2em 0;
  height: 50vh;
  border-radius: 2em 2em 0 0;
  position: relative;

  div span {
    padding: 0.5em 1em;
    position: relative;
    cursor: pointer;
    user-select: none;

    &:before {
      content: "";
      width: 100%;
      height: 0;
      background-color: rgba(var(--yellow), 1);
      position: absolute;
      border-radius: 4px;
      bottom: 0;
      left: 0;
      transition: all 0.1s ease;
    }
    &.active:before {
      height: 4px;
    }
  }
  .overflow-x-hidden {
    overflow: hidden;
  }

  @media screen and (min-width: 764px) {
    margin-top: 7vh;
    height: calc(100% - 7vh);
    border-radius: 0 0 0 5em;

    & > span {
      display: none;
    }
  }
`;
const MiniBar = styled.span`
  width: 30%;
  height: 8px;
  background-color: white;
  position: absolute;
  top: 6px;
  left: 50%;
  border-radius: 5px;
  transform: translateX(-50%);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
`;

export default DetailPokemonPage;
