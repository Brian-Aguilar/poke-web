const initalState = {
  datos: null,
};

const totalPokemonsReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_TOTAL_POKEMONS":
      return { datos: action.payload.datos };
    default:
      return { ...state };
  }
};

export default totalPokemonsReducer;
