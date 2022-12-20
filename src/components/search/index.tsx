import { useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
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

     const handleClickRequest = useCallback(() => {
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
                    onClick={handleClickRequest}
                    onChange={changeInput}
                    onFocus={() => setActiveModal(true)}
                    onBlur={() => {
                         const timeCloseModal = setTimeout(() => setActiveModal(false), 200);
                    }}
                    type="text"
                    placeholder="O que você está procurando?"
               />
               <div className="iconSearch">
                    <FiSearch />
               </div>
               {activeModal && filterPokemons.length > 0 && (
                    <S.ModalSearch>
                         {filterPokemons.map((item: pokemonSmall) => (
                              <Link
                                   to={`/products/${item.name}`}
                                   key={item.name}
                                   onClick={() => {
                                        setSearch("");
                                   }}
                              >
                                   <li>{item.name}</li>
                              </Link>
                         ))}
                    </S.ModalSearch>
               )}
          </S.Search>
     );
};

export default Search;
