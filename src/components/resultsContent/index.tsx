import React from "react";
import { useState, useEffect } from "react";
import * as S from "./styles";
import { pokemonSmall } from "../../types/types";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loading from "../loading";

type props = {
     data: pokemonSmall[];
     isloading: boolean;
     input: string;
};

const ResultsContent = ({ data, input, isloading }: props) => {
     const navigate = useNavigate();
     const [search, setSearch] = useState<string>(input);

     useEffect(() => {
          setSearch(input);
     }, [input]);

     const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
          setSearch(e.currentTarget.value.toLowerCase());
     };

     const handleEnterResult = (e: React.KeyboardEvent<HTMLElement>) => {
          if (e.key === "Enter") {
               navigate(`/results/${search}`);
          }
     };

     return (
          <S.Conteiner>
               <h2>What are you looking for?</h2>
               <span className="subTitle">
                    Duis dictum neque et commodo hendrerit. Etiam bibendum ligula et <br /> nibh vulputate ultricies. Vestibulum
                    iaculis
               </span>
               <S.inputResults>
                    <div className="conteinerinput">
                         <input type="text" value={search} onChange={changeInput} onKeyDown={handleEnterResult} />
                         <button className="iconSearch">
                              <FiSearch
                                   onClick={() => {
                                        setSearch("");
                                        navigate(`/results/${search}`);
                                   }}
                              />
                         </button>
                    </div>
                    <div className="conteinerResults">
                         {data && (
                              <>
                                   <span className="foundresults"> Resultados encontrados: {data.length} </span>
                                   <div className="results">
                                        {data.map((item: pokemonSmall) => (
                                             <Link key={item.name} to={`/products/${item.name}`}>
                                                  <p key={item.name}>{item.name}</p>
                                             </Link>
                                        ))}
                                   </div>
                              </>
                         )}
                         {isloading && <Loading width="150px" height="150px" />}
                    </div>
               </S.inputResults>
          </S.Conteiner>
     );
};

export default ResultsContent;
