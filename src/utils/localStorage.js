export const getLocalStorage = (nombre) => {
  return JSON.parse(localStorage.getItem(nombre));
};

export const setLocalStorage = (nombre, datos) => {
  return localStorage.setItem(nombre, JSON.stringify(datos));
};
