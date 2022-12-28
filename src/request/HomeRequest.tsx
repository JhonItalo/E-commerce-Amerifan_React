export const URL = "https://pokeapi.co/api/v2/pokemon/";

const generateArrayPromises = () => {
     const numberPokemons = 16;
     const fetchPokemons: any[] = [];
     for (let i = 1; i <= numberPokemons; i++) {
          fetchPokemons.push(
               fetch(`${URL}${i}`)
                    .then((pokemon) => pokemon.json())
                    .catch((error) => error)
          );
     }
     return fetchPokemons;
};

const pokemonsListPromises = generateArrayPromises();

export const resolveListPromises = async () => {
     return Promise.all(pokemonsListPromises).then((pokemons) => {
          const data = {
               bestSeller: pokemons.concat().splice(0, 8),
               newProducts: pokemons.concat().splice(8, 16),
          };
          return data;
     });
};
