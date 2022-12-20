import { useQuery } from "react-query";
import { URL } from "../utils/Constains";

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

const useHomeFetch = () => {
     const pokemonsListPromises = generateArrayPromises();

     const resolveListPromises = async () => {
          return Promise.all(pokemonsListPromises)
               .then((pokemons) => {
                    const data = {
                         bestSeller: pokemons.concat().splice(0, 8),
                         newProducts: pokemons.concat().splice(8, 16),
                    };
                    return data;
               })
               .catch((error) => error);
     };

     return useQuery("HomeFetch", resolveListPromises, {
          staleTime: 1000 * 60 * 60,
          refetchOnWindowFocus: false, //foco,
          retry: 5, // tentar novamente
     });
};

export default useHomeFetch;
