import React, { createContext } from "react";
import { pokemonInfo } from "../types/types";

export type dataType = {
     bestSeller: pokemonInfo[];
     newProducts: pokemonInfo[];
};

export type DataHomeType = {
     data: dataType | undefined;
     isloading: boolean | undefined;
     error: boolean | undefined | unknown;
};
const defaultValue = {
     data: undefined,
     isloading: undefined,
     error: undefined,
};
export const DataHomeContext = createContext<DataHomeType>(defaultValue);

interface props {
     data: dataType | undefined;
     isloading: boolean | undefined;
     error: boolean | undefined | unknown;
     children: React.ReactNode;
}

const DataHomeProvider = ({ children, data, isloading, error }: props) => {
     console.log("context data provider");

     return <DataHomeContext.Provider value={{ data, isloading, error }}>{children}</DataHomeContext.Provider>;
};

export default DataHomeProvider;
