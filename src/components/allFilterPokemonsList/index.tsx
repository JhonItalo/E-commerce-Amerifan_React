import React, { useContext } from "react";
import * as S from "./styles";
import Card from "../Card";
import Loading from "../loading";
import { DataProviderContext } from "../../contexts/DataProviderContext";
import { FilterProviderContext, FiltercontextType } from "../../contexts/FilterContext";

const AllFilterPokemonsList = () => {
     const { data, isloading, error } = useContext(DataProviderContext);
     const { filterAtual } = useContext<FiltercontextType>(FilterProviderContext);

     console.log("list filter render");

     const OptionSelectFilter: { [index: string]: any[] } = {
          all: data ? data : undefined,
          type: data
               ? data.filter((item: any) => {
                      for (let i = 0; i < item.types.length; i++) {
                           if (filterAtual.type.includes(item.types[i].type.name)) {
                                return item.name;
                           }
                      }
                 })
               : [],

          color: data
               ? data.filter((item: any) => {
                      if (filterAtual.color.includes(item.name)) {
                           return item.name;
                      }
                 })
               : [],
     };
     console.log(OptionSelectFilter["color"], "color");
     const filtrados = OptionSelectFilter["type"].concat(OptionSelectFilter["color"]);
     return (
          <S.ConteinerPokemons>
               <>
                    {filterAtual.option === "all" && data && (
                         <>
                              <div className="teste">
                                   <p style={{ color: "black" }}>{data.length} resultados encontrados</p>
                                   <select defaultValue="relevãncia">
                                        <option value="relevância">relevância</option>
                                        <option value="mais vendidos">mais vendidos</option>
                                        <option value="maior preço">maior preço</option>
                                        <option value="menor preço">menor preço</option>
                                   </select>
                              </div>

                              <S.ListPokemons>
                                   {data.map((item: any) => (
                                        <Card key={item.id} pokemon={item} />
                                   ))}
                              </S.ListPokemons>
                         </>
                    )}

                    {filterAtual.option === "activeFilter" && (
                         <>
                              <div className="teste">
                                   <p style={{ color: "black" }}>{filtrados.length} resultados encontrados</p>
                                   <select defaultValue="relevãncia">
                                        <option value="relevância">relevância</option>
                                        <option value="mais vendidos">mais vendidos</option>
                                        <option value="maior preço">maior preço</option>
                                        <option value="menor preço">menor preço</option>
                                   </select>
                              </div>

                              <S.ListPokemons>
                                   {filtrados.map((item: any) => (
                                        <Card key={item.id} pokemon={item} />
                                   ))}
                              </S.ListPokemons>
                         </>
                    )}
                    {isloading && <Loading width="150px" height="150px" />}
                    {error && <p>Houve algum problema</p>}
               </>
          </S.ConteinerPokemons>
     );
};

export default AllFilterPokemonsList;
