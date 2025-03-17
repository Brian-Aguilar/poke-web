import { useLocation } from "react-router-dom"
import { BasePageStyle } from "../styles/GlobalStyle"
import SearchInput from "../components/SearchInput"

const PokedexPage = () => {
    const location = useLocation()
    const [, base, tipo, nombre] = location.pathname.split("/")
    console.log(base, tipo, nombre)

    return (
        <BasePageStyle>
            <h1>pokédex</h1>

            <SearchInput base="pokedex" />
        </BasePageStyle>
    )
}

export default PokedexPage