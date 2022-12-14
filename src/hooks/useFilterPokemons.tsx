import { useState } from "react";
import { pokemonSmall } from "../types/types";

interface props {
     dataPokemons: pokemonSmall[];
}

const UseFilterPokemons = ({ dataPokemons }: props) => {
     const [search, setSearch] = useState<string>("");
     let filterPokemons: pokemonSmall[] = [];
     if (search.length > 0 && dataPokemons.length > 0) {
          filterPokemons = dataPokemons.filter((data: pokemonSmall) => data.name.includes(search));
     }
     return { search, setSearch, filterPokemons };
};

export default UseFilterPokemons;
