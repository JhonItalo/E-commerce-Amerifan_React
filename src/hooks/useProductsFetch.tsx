import { URL } from "../utils/Constains";
import { useQuery } from "react-query";

type props = {
     params?: string;
};

const useProductsFetch = ({ params }: props) => {
     const requestUniqPokemon = async () => {
          return fetch(`${URL}${params}`).then((pokemon) => pokemon.json());
     };

     return useQuery(`UniqPokemonIDCache${params}`, requestUniqPokemon, {
          staleTime: 1000 * 60 * 60,
          retry: 0,
     });
};

export default useProductsFetch;
