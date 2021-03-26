import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../redux/actions/pokemonsAction";

import CardList from "../components/CardList";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const { data, isLoading } = useSelector((state) => state.pokemons);

  return (
    <div className="page-base">
      <h1>Pokedex</h1>

      {isLoading && <p>Cargando....</p>}

      {data.length !== 0 && <CardList data={data} />}
    </div>
  );
};
export default HomePage;
