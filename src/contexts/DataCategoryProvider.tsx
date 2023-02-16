import React, { createContext } from "react";
import { pokemonInfo } from "../types/types";

export type DataCategoryType = {
     data: pokemonInfo[] | undefined;
     isloading: boolean | undefined;
     error: boolean | undefined | unknown;
};

export const DataCategoryContext = createContext<DataCategoryType>({} as DataCategoryType);

interface props {
     data: pokemonInfo[] | undefined;
     isloading: boolean | undefined;
     error: boolean | undefined | unknown;
     children: React.ReactNode;
}

const DataCategoryProvider = ({ children, data, isloading, error }: props) => {
     console.log("context category provider");

     return <DataCategoryContext.Provider value={{ data, isloading, error }}>{children}</DataCategoryContext.Provider>;
};

export default DataCategoryProvider;
