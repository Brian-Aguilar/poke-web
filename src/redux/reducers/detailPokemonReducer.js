const initalState = {
  datos: null,
  isLoading: false,
  isError: false,
};

const detailPokemonReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_DETAILS_POKEMON":
      return { ...state, datos: action.payload.data, isLoading: false };
    case "LOADING_DETAILS_POKEMON":
      return { ...state, isLoading: true };
    case "CLEAR_DETAILS_POKEMON":
      return { ...state, datos: null };
    case "ERROR_DETAILS_POKEMON":
      return { ...state, isError: true };
    default:
      return { ...state };
  }
};

export default detailPokemonReducer;
