import { Provider } from "react-redux";
import { store } from "./redux/store/store";

import GlobalStyle from "./components/GlobalStyle";
import AppRouter from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppRouter />
    </Provider>
  );
};
export default App;
