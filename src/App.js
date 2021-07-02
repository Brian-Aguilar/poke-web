import GlobalStyle from "./components/GlobalStyle";
import { PokemonAppProvider } from "./R";
import AppRouter from "./routes";

const App = () => {
  return (
    <PokemonAppProvider>
      <GlobalStyle />
      <AppRouter />
    </PokemonAppProvider>
  );
};
export default App;
