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
     const { type, color, order, setOrder } = useContext<FiltercontextType>(FilterProviderContext);
     console.log("order", order);
     let ListOrder: pokemonInfo[] | undefined = data;

     const verifyOrderList = () => {
          if (data) {
               if (order === "default") {
                    return data;
               } else if (order === "name") {
                    return data.sort((a, b) => {
                         if (a.name < b.name) {
                              return -1;
                         } else {
                              return 0;
                         }
                    });
               } else if (order === "type") {
                    return data.sort((a, b) => {
                         if (a.types[0] < b.types[0]) {
                              return -1;
                         } else {
                              return 0;
                         }
                    });
               }
          } else {
               return undefined;
          }
     };

     ListOrder = verifyOrderList();

     const filterType: pokemonInfo[] = ListOrder
          ? ListOrder.filter((item: pokemonInfo) => {
                 for (let i = 0; i < item.types.length; i++) {
                      if (type.includes(item.types[i])) {
                           return item.name;
                      }
                 }
            })
          : [];

     const filterColor: pokemonInfo[] = ListOrder
          ? ListOrder.filter((item: pokemonInfo) => {
                 if (color.includes(item.name)) {
                      return item.name;
                 }
            })
          : [];

     const processingArrayFilter = () => {
          const filterConcats = filterType.concat(filterColor);
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
                    {ListOrder && type === "" && color === "" && (
                         <>
                              <div className="titleOrder">
                                   <p style={{ color: "black" }}>{ListOrder.length} resultados encontrados</p>
                                   <select defaultValue="default" onChange={(e) => setOrder(e.currentTarget.value)}>
                                        <option value="default">Creation date</option>
                                        <option value="name">Name</option>
                                        <option value="type">Type</option>
                                   </select>
                              </div>

                              <S.ListPokemons>
                                   {ListOrder.map((item: pokemonInfo) => (
                                        <Card key={item.id} pokemon={item} />
                                   ))}
                              </S.ListPokemons>
                         </>
                    )}

                    {(type != "" || color != "") && (
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
