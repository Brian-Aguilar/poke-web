import { HashRouter, Route, Switch } from "react-router-dom";

import HomePage from "../page/Home";
import PokedexPage from "../page/PokedexPage";
import ItemsPage from "../page/ItemsPage";
import NotFoundPage from "../page/404Page";

import pokeballFondo from "../images/pokeball_fondo.svg";
import { PokemonProvider } from "../context/pokemonContext";
import ProximaPagina from "../page/page";

const AppRouter = () => {
  /**
   * <BrowserRouter></BrowserRouter>
   *  Cuando la app este corriendo de raiz
   */

  return (
    <HashRouter>
      <main className="main shadow">
        <img src={pokeballFondo} alt="pokeball-fondo" />
        <Switch>
          <Route
            exact
            path={["/pokedex", "/pokedex/pokemon/:id", "/pokedex/search/:name"]}
          >
            <PokemonProvider>
              <PokedexPage />
            </PokemonProvider>
          </Route>
          <Route exact path={["/items", "/items/search/:item"]}>
            <ItemsPage />
          </Route>
          <Route exact path="/types">
            <ProximaPagina />
          </Route>
          <Route exact path="/ability">
            <ProximaPagina />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </HashRouter>
  );
};
export default AppRouter;
