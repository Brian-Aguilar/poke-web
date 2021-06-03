import { useLocation } from "react-router";
import { BasePageStyle } from "../components/GlobalStyle";
import SearchInput from "../components/Input/search";
import ListItems from "../components/Lists/items";
import ListSearchItems from "../components/Lists/searchItems";
import NavbarPokedex from "../components/Navbar/pokedex";

const ItemsPage = () => {
  const location = useLocation();
  // eslint-disable-next-line
  const [__, ___, namePage, searchData] = location.pathname.split("/");

  return (
    <BasePageStyle>
      <NavbarPokedex />
      <h1>{namePage === undefined ? "Items" : namePage}</h1>

      <SearchInput base="items" />

      {namePage === "search" && <ListSearchItems search={searchData} />}

      {namePage === undefined && <ListItems />}
    </BasePageStyle>
  );
};

export default ItemsPage;
