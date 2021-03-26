import { Provider } from "react-redux";
import GlobalStyle from "./components/GlobalStyle";

import { store } from "./redux/store/store";
import Nav from "./components/Nav";
import HomePage from "./page/Home";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Nav />
      <HomePage />
    </Provider>
  );
};
export default App;
