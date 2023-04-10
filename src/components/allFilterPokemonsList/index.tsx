import { useContext, useState, useCallback } from "react";
import * as S from "./styles";
import Card from "../card";
import Loading from "../loading";
import { FilterProviderContext, FiltercontextType } from "../../contexts/FilterContext";
import { pokemonInfo } from "../../types/types";
import { DataCategoryContext, DataCategoryType } from "../../contexts/DataCategoryProvider";

const AllFilterPokemonsList = () => {
    const { data, isloading, error } = useContext<DataCategoryType>(DataCategoryContext);
    const { type, color } = useContext<FiltercontextType>(FilterProviderContext);
    const [select, setSelect] = useState<string>("default");

    const selectOrder = useCallback((): pokemonInfo[] | undefined => {
        if (data) {
            if (select === "name") {
                const nameOrder = data.slice().sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
                return nameOrder;
            } else if (select === "type") {
                const typeOrder = data.slice().sort((a, b) => {
                    if (a.types[0] < b.types[0]) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
                return typeOrder;
            }
        }
        return data;
    
  }, [select,data]);    
    
    
    const order: pokemonInfo[] | undefined = selectOrder();

    const filter: pokemonInfo[] =
        order && (type != "" || color != "")
            ? order.filter((item: pokemonInfo) => {
                if(color.includes(item.name)){
                    return item.name;
                }
                  for (let i = 0; i < item.types.length; i++) {
                      if (type.includes(item.types[i])) {
                          return item.name;
                      }
                  }
              })
            : [];

    return (
        <S.ConteinerPokemons>
            <>
                {filter.length > 1 && (
                    <>
                        <div className="titleOrder">
                            <p style={{ color: "black" }}>{filter.length} resultados encontrados</p>
                            <select
                                value={select}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                    setSelect(e.currentTarget.value)
                                }>
                                <option value="default">Creation date</option>
                                <option value="name">Name</option>
                                <option value="type">Type</option>
                            </select>
                        </div>

                        <S.ListPokemons>
                            {filter.map((item: pokemonInfo) => (
                                <Card width="30%" key={item.id} pokemon={item} />
                            ))}
                        </S.ListPokemons>
                    </>
                )}

                {order && filter.length < 1 && (
                    <>
                        <div className="titleOrder">
                            <p style={{ color: "black" }}>{order.length} resultados encontrados</p>
                            <select
                                value={select}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                    setSelect(e.currentTarget.value)
                                }>
                                <option value="default">Creation date</option>
                                <option value="name">Name</option>
                                <option value="type">Type</option>
                            </select>
                        </div>

                        <S.ListPokemons>
                            {order &&
                                order.map((item: pokemonInfo) => (
                                    <Card width="30%" key={item.id} pokemon={item} />
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
