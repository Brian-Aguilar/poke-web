import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

  return (
    <Router>
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
    </Router>
  );
};
export default AppRouter;
