import { HashRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import Nav from "../components/Nav";
import HomePage from "../page/Home";
import { useEffect } from "react";
import { getTotalNamePokemons } from "../redux/actions/pokemonsAction";
import SearchPokemon from "../page/SearchPokemon";
import NotFoundPage from "../page/404Page";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalNamePokemons());
  }, [dispatch]);

  /**
   * <BrowserRouter></BrowserRouter>
   *  Cuando la app este corriendo de raiz
   */

  return (
    <HashRouter>
      <Nav />
      <Switch>
        <Route exact path={["/pokemon/:id", "/"]}>
          <HomePage />
        </Route>
        <Route exact path="/search/:pokemon">
          <SearchPokemon />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </HashRouter>
  );
};
export default AppRouter;
