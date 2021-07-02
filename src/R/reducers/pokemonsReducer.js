const pokemonsReducer = (state, action) => {
  switch (action.type) {
    case "POKEMONS":
      return {
        ...state,
        pokemons: {
          data: [...state.pokemons.data, ...action.payload.data],
          next: action.payload.next,
        },
        isLoading: false,
      };
    case "POKEMONS_LIST":
      return {
        ...state,
        listPokemons: action.payload,
        isLoading: false,
      };
    case "POKEMONS_LIST_CLEAR":
      return { ...state, listPokemons: [] };
    case "POKEMON":
      return { ...state, pokemon: action.payload, isLoading: false };
    case "POKEMON_CLEAR":
      return { ...state, pokemon: null };
    case "POKEMONS_LOADING":
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default pokemonsReducer;
