import React, { useContext } from "react";
import * as S from "./styles";
import Card from "../Card";
import Loading from "../loading";
import { DataProviderContext } from "../../contexts/DataProviderContext";
import { FilterProviderContext, FiltercontextType } from "../../contexts/FilterContext";

const AllFilterPokemonsList = () => {
     console.log("list filter render");
     const { data, isloading, error } = useContext(DataProviderContext);
     const { filterAtual } = useContext<FiltercontextType>(FilterProviderContext);

     const type = data
          ? data.filter((item: any) => {
                 for (let i = 0; i < item.types.length; i++) {
                      if (filterAtual.type.includes(item.types[i].type.name)) {
                           return item.name;
                      }
                 }
            })
          : [];

     const color = data
          ? data.filter((item: any) => {
                 if (filterAtual.color.includes(item.name)) {
                      return item.name;
                 }
            })
          : [];

     const RemoveDuplicatefilterConcats = type.concat(color);

     const filtrados: any[] = [];

     RemoveDuplicatefilterConcats.forEach((element: any[]) => {
          if (!filtrados.includes(element)) {
               filtrados.push(element);
          }
     });

     console.log(type.length, "elgnth type");

     return (
          <S.ConteinerPokemons>
               <>
                    {data && type.length === 0 && color.length === 0 && (
                         <>
                              <div className="titleOrder">
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

                    {(type.length > 0 || color.length > 0) && (
                         <>
                              <div className="titleOrder">
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