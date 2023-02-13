import React, { useState } from "react";
import * as S from "./styles";
import FilterSelect from "../filterSelect";
import AllFilterPokemonsList from "../allFilterPokemonsList";
import FilterProvider from "../../contexts/FilterContext";

type props = {
     name: string;
};

const CategoryContent = ({ name }: props) => {
     const [order, setOrder] = useState<string>("default");
     const [type, setType] = useState<string>("");
     const [color, setColor] = useState<string>("");

     console.log("Produtos by category render");

     return (
          <S.ProductsByCategory>
               <h2>{name}</h2>
               <FilterProvider order={order} type={type} color={color} setOrder={setOrder} setType={setType} setColor={setColor}>
                    <S.Content>
                         <FilterSelect />
                         <AllFilterPokemonsList />
                    </S.Content>
               </FilterProvider>
          </S.ProductsByCategory>
     );
};

export default CategoryContent;
