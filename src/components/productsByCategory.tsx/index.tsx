import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { useLocation } from "react-router-dom";
import FilterSelect from "../filterSelect";
import AllFilterPokemonsList from "../allFilterPokemonsList";
import { DataProviderContext } from "../../contexts/DataProviderContext";
import { DatacontextType } from "../../contexts/DataProviderContext";
import FilterProvider from "../../contexts/FilterContext";

type propsFilterAtual = {
     option: string;
     type: string;
     color: string;
};

const ProductsByCategory = () => {
     const { pathname } = useLocation();
     const { data } = useContext<DatacontextType>(DataProviderContext);
     const title = pathname.slice(1);

     const [filterAtual, setFilterAtual] = useState<propsFilterAtual>({ option: "all", type: "", color: "" });

     console.log("Produtos by category render");
     console.log(filterAtual, "filter atual");

     useEffect(() => {
          setFilterAtual({ option: "all", type: "", color: "" });
     }, [data]);

     return (
          <S.ProductsByCategory>
               <h2>{title}</h2>
               <FilterProvider filterAtual={filterAtual} setFilterAtual={setFilterAtual}>
                    <S.Content>
                         <FilterSelect />
                         <AllFilterPokemonsList />
                    </S.Content>
               </FilterProvider>
          </S.ProductsByCategory>
     );
};

export default ProductsByCategory;
