import useListItemsHook from "../../hooks/useListItemsHook";
import ListBase from "./";

const ListItems = () => {
  const { listItems, getListItems } = useListItemsHook();
  return (
    <>
      <ListBase data={listItems} getData={getListItems} type="item" />
    </>
  );
};

export default ListItems;
