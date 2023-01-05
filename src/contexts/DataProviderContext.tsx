import React, { createContext } from "react";

export type DatacontextType = {
     data: any | undefined;
     isloading: boolean | undefined;
     error: boolean | undefined | unknown;
};
const defaultValue = {
     data: undefined,
     isloading: undefined,
     error: undefined,
};
export const DataProviderContext = createContext<DatacontextType>(defaultValue);

interface props {
     data: any | undefined;
     isloading: boolean | undefined;
     error: boolean | undefined | unknown;
     children: React.ReactNode;
}

const DataProvider = ({ children, data, isloading, error }: props) => {
     console.log("context data provider");

     return <DataProviderContext.Provider value={{ data, isloading, error }}>{children}</DataProviderContext.Provider>;
};

export default DataProvider;
