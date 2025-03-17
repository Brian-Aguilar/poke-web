import { HashRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/Home"
import PokeballFondo from "../assets/PokeballFondo"
import NavbarPokedexContainer from "../containers/NavbarContainer"
import PokedexPage from "../pages/Pokedex"

const AppRouter = () => {
    return (
        <HashRouter>
            <main className="main shadow">
                <NavbarPokedexContainer />
                <span><PokeballFondo /></span>
                <Routes>
                    <Route index element={<HomePage />} />

                    <Route path="pokedex">
                        <Route index element={<PokedexPage />} />
                        <Route path="pokemon/:id" element={<PokedexPage />} />
                        <Route path="search/:name" element={<PokedexPage />} />
                    </Route>
                </Routes>
            </main>
        </HashRouter>
    )
}

export default AppRouter