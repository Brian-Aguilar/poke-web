export const imageByPokemon = (id) => {
  if (id < 899) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

export const imageByItem = (name) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}.png`;
};

export const nameStat = (name) => {
  const nameArray = name.split("-");
  if (nameArray.length === 1) {
    return nameArray[0];
  }
  return `S. ${nameArray[1]}`;
};

export const nameItem = (name) => {
  const nameArray = name.split("-");
  return `${nameArray[0]} ${nameArray[1] || ""}`;
};

export const filterPokemonEvolution = (pokemon = []) => {
  return pokemon.filter((menor, mayor) => {
    if (menor < mayor) {
      return 1;
    }
    if (menor > mayor) {
      return -1;
    }

    return 0;
  });
};
