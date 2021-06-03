import useSearchItemsHook from "../../hooks/useSearchItemsHook";
import ListNormal from "./normal";

const ListSearchItems = ({ search }) => {
  const searchParse = search.replaceAll(" ", "-");
  const { items } = useSearchItemsHook(searchParse);
  return <ListNormal data={items} type="search" />;
};

export default ListSearchItems;
