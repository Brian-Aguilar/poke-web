const itemsReducer = (state, action) => {
  switch (action.type) {
    case "ITEMS":
      return {
        ...state,
        items: {
          data: [...state.items.data, ...action.payload.data],
          next: action.payload.next,
        },
        isLoading: false,
      };
    case "SEARCH_ITEMS":
      return { ...state, searchPokemons: action.payload, isLoading: false };
    case "ITEMS_LOADING":
      return { ...state, isLoading: true };
    default:
      break;
  }
};

export default itemsReducer;
