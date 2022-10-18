export const getAllPokemon = (url: string) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          resolve(data);
        } else {
          reject(data);
        }
      });
  });
};
