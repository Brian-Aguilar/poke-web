const initalState = {
  next: null,
  previous: null,
  data: [],
  isLoading: false,
};

const pokemonReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        next: action.payload.next,
        previous: action.payload.previous,
        data: [...state.data, ...action.payload.data],
        isLoading: false,
      };

    case "LOADING_POKEMONS":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default pokemonReducer;
