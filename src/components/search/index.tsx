import { useState, useCallback, useRef } from "react";
import * as S from "./styles";
import { pokemonSmall } from "../../types/types";
import { FiSearch } from "react-icons/fi";
import UseFilterPokemons from "../../hooks/useFilterPokemons";
import { fetchData } from "../../request/BuscaFetch";

const Search = () => {
     console.log("busca render");

     const [dataPokemons, setDataPokemons] = useState<pokemonSmall[]>([]);
     const { search, setSearch, filterPokemons } = UseFilterPokemons({ dataPokemons });
     const [activeModal, setActiveModal] = useState<boolean>(false);
     const inputRef = useRef<HTMLInputElement>(null);

     const request = useCallback(() => {
          fetchData({ setDataPokemons });
     }, []);

     const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
          setSearch(e.currentTarget.value.toLowerCase());
     };

     return (
          <S.Search>
               <input
                    ref={inputRef}
                    value={search}
                    onClick={request}
                    onChange={changeInput}
                    onFocus={() => setActiveModal(true)}
                    onBlur={() => setActiveModal(false)}
                    type="text"
                    placeholder="O que você está procurando?"
               />
               <div className="iconSearch">
                    <FiSearch />
               </div>
               {activeModal && filterPokemons.length > 0 && (
                    <S.ModalSearch>
                         {filterPokemons.map((item: pokemonSmall) => (
                              <li key={item.name}>{item.name}</li>
                         ))}
                    </S.ModalSearch>
               )}
          </S.Search>
     );
};

export default Search;
