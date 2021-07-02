import { Suspense, lazy } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import NavbarPokedex from "../components/Navbar/pokedex";
import HomePage from "../page/Home";
import NotFoundPage from "../page/404Page";
import LoadingPage from "../page/LoadingPage";

import PokeballFondo from "../components/svg/pokeball_gris";
import ProximaPagina from "../page/page";

const PokedexPage = lazy(() => import("../page/PokedexPage"));
const ItemsPage = lazy(() => import("../page/ItemsPage"));

const AppRouter = () => {
  /**
   * <BrowserRouter></BrowserRouter>
   *  Cuando la app este corriendo de raiz
   */
  return (
    <HashRouter>
      <main className="main shadow">
        <NavbarPokedex />
        <span>
          <PokeballFondo />
        </span>
        <Suspense fallback={<LoadingPage />}>
          <Switch>
            <Route
              exact
              path={[
                "/pokedex",
                "/pokedex/pokemon/:id",
                "/pokedex/search/:name",
              ]}
            >
              <PokedexPage />
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
        </Suspense>
      </main>
    </HashRouter>
  );
};
export default AppRouter;
