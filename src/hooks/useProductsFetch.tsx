import { URL } from "../utils/Constains";
import { useQuery } from "react-query";

type props = {
     name?: string;
};

const useProductsFetch = ({ name }: props) => {
     const requestUniqPokemon = async () => {
          return fetch(`${URL}${name}`)
               .then((pokemon) => pokemon.json())
               .catch((error) => error);
     };

     return useQuery(`UniqPokemonFetch${name}`, requestUniqPokemon, {
          staleTime: 1000 * 60 * 60,
     });
};

export default useProductsFetch;
