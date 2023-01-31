import { useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { pokemonSmall } from "../../types/types";
import { FiSearch } from "react-icons/fi";
import UseFilterPokemons from "../../hooks/useFilterPokemons";
import { fetchData } from "../../request/BuscaFetch";
import AccessibleButtonName from "../AcessibleButtonName";
import { useNavigate } from "react-router-dom";
import AccessibleName from "../AcessibleName";

const Search = () => {
     console.log("busca render");
     const navigate = useNavigate();
     const inputRef = useRef<HTMLInputElement>(null);
     const { search, setSearch, filterPokemons, setDataPokemons, activeModal, setActiveModal } = UseFilterPokemons();

     const handleClickRequest = useCallback(() => {
          fetchData({ setDataPokemons });
     }, []);

     const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
          setSearch(e.currentTarget.value.toLowerCase());
     };

     const handleFoundResult = (e: React.KeyboardEvent<HTMLElement>) => {
          if (e.key === "Enter") {
               setSearch("");
               inputRef.current?.blur();
               navigate(`/results/${search}`);
          }
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
                    onKeyDown={handleFoundResult}
                    type="text"
                    placeholder="O que você está procurando?"
               />
               <button className="iconSearch">
                    <FiSearch
                         onClick={() => {
                              setSearch("");
                              navigate(`/results/${search}`);
                         }}
                    />
                    <AccessibleButtonName name="buscar" />
               </button>
               <S.Atendimento>
                    <Link to="/telefonia">
                         Chame o vendedor
                         <AccessibleName name="chame o vendedor" />
                    </Link>
                    <Link to="/telefonia">
                         Atendimento <AccessibleName name="atendimento" />
                    </Link>
                    <Link to="/telefonia">
                         Lista de Presents <AccessibleName name="lista de presents" />
                    </Link>
               </S.Atendimento>

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
