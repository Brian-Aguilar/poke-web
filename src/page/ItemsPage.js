import { useLocation } from "react-router";
import { BasePageStyle } from "../components/GlobalStyle";
import SearchInput from "../components/Input/search";
import ListItems from "../components/Lists/items";
import ListSearchItems from "../components/Lists/searchItems";

const ItemsPage = () => {
  const location = useLocation();
  const [, , namePage] = location.pathname.split("/");

  return (
    <BasePageStyle>
      <h1>{namePage === undefined ? "Items" : namePage}</h1>
      <SearchInput base="items" />
      {namePage === "search" && <ListSearchItems />}
      {namePage === undefined && <ListItems />}
    </BasePageStyle>
  );
};

export default ItemsPage;
