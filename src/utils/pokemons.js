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
