// Pagina Web de la API: https://pokeapi.co/

export const obtenerPokemones = (urlPersonalizada = null) =>
  urlPersonalizada !== null
    ? urlPersonalizada
    : "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0";

export const obtenerID = (url) => {
  const id = url.split("/");
  return parseInt(id[id.length - 2]);
};

export const obtenerImagenPorID = (url) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${obtenerID(
    url
  )}.png`;
};

export const obtenerImagenAltPorID = (url) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${obtenerID(
    url
  )}.png`;
};

export const obtenerTotalPokemones = () => {
  return "https://pokeapi.co/api/v2/pokemon?limit=1118";
};
