/**
 * https://www.codehousegroup.com/insight-and-inspiration/tech-stream/using-redux-and-context-api
 * https://stackoverflow.com/questions/53146795/react-usereducer-async-data-fetch
 * https://hmh.engineering/using-react-contextapi-usereducer-as-a-replacement-of-redux-as-a-state-management-architecture-336452b2930e
 */

export const pokemonInitial = {
  pokemons: {
    data: [],
    next: 1,
  },
  listPokemons: [],
  pokemon: null,
  isLoading: true,
};
