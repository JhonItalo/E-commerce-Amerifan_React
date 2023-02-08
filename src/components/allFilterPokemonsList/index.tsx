import { useContext } from "react";
import * as S from "./styles";
import Card from "../card2";
import Loading from "../loading";
import { FilterProviderContext, FiltercontextType } from "../../contexts/FilterContext";
import { pokemonInfo } from "../../types/types";
import { DataCategoryContext, DataCategoryType } from "../../contexts/DataCategoryProvider";

const AllFilterPokemonsList = () => {
     console.log("list filter render");
     const { data, isloading, error } = useContext<DataCategoryType>(DataCategoryContext);
     const { filterAtual } = useContext<FiltercontextType>(FilterProviderContext);

     const type: pokemonInfo[] = data
          ? data.filter((item: pokemonInfo) => {
                 for (let i = 0; i < item.types.length; i++) {
                      if (filterAtual.type.includes(item.types[i])) {
                           return item.name;
                      }
                 }
            })
          : [];

     const color: pokemonInfo[] = data
          ? data.filter((item: pokemonInfo) => {
                 if (filterAtual.color.includes(item.name)) {
                      return item.name;
                 }
            })
          : [];

     const processingArrayFilter = () => {
          const filterConcats = type.concat(color);
          const removeDuplicate: pokemonInfo[] = [];

          filterConcats.forEach((element) => {
               if (!removeDuplicate.includes(element)) {
                    removeDuplicate.push(element);
               }
          });
          return removeDuplicate;
     };

     const filtrados = processingArrayFilter();

     return (
          <S.ConteinerPokemons>
               <>
                    {data && filterAtual.type === "" && filterAtual.color === "" && (
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
                                   {data.map((item: pokemonInfo) => (
                                        <Card key={item.id} pokemon={item} />
                                   ))}
                              </S.ListPokemons>
                         </>
                    )}

                    {(filterAtual.type != "" || filterAtual.color != "") && (
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
                                   {filtrados.map((item: pokemonInfo) => (
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
