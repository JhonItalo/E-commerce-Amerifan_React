import React, { createContext } from "react";
import { pokemonInfo } from "../types/types";


export type DataCategoryType = {
     data: pokemonInfo[] | undefined;
     isloading: boolean | undefined;
     error: boolean | undefined | unknown;
};
const defaultValue = {
     data: undefined,
     isloading: undefined,
     error: undefined,
};
export const DataCategoryContext = createContext<DataCategoryType>(defaultValue);

interface props {
     data: pokemonInfo[] | undefined;
     isloading: boolean | undefined;
     error: boolean | undefined | unknown;
     children: React.ReactNode;
}

const DataCategoryProvider = ({ children, data, isloading, error }: props) => {
     console.log("context data provider");

     return <DataCategoryContext.Provider value={{ data, isloading, error }}>{children}</DataCategoryContext.Provider>;
};

export default DataCategoryProvider;
