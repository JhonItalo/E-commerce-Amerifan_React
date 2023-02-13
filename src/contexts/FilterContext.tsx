import React, { createContext } from "react";

export type propsFilterAtual = {
     type: string;
     color: string;
};

export type FiltercontextType = {
     order: string;
     type: string;
     color: string;
     setOrder: React.Dispatch<React.SetStateAction<string>>;
     setType: React.Dispatch<React.SetStateAction<string>>;
     setColor: React.Dispatch<React.SetStateAction<string>>;
     //setFilterAtual: React.Dispatch<React.SetStateAction<propsFilterAtual>>;
};
const defaultValue = {
     order: "generation",
     type: "",
     color: "",
     setOrder: () => {},
     setType: () => {},
     setColor: () => {},
};
export const FilterProviderContext = createContext<FiltercontextType>(defaultValue);

interface props {
     order: string;
     type: string;
     color: string;
     setOrder: React.Dispatch<React.SetStateAction<string>>;
     setType: React.Dispatch<React.SetStateAction<string>>;
     setColor: React.Dispatch<React.SetStateAction<string>>;
     // filterAtual: propsFilterAtual;
     //setFilterAtual: React.Dispatch<React.SetStateAction<propsFilterAtual>>;
     children: React.ReactNode;
}

const FilterProvider = ({ order, type, color, setOrder, setType, setColor, children }: props) => {
     console.log("context filter provider");

     return (
          <FilterProviderContext.Provider value={{ order, type, color, setOrder, setType, setColor }}>
               {children}
          </FilterProviderContext.Provider>
     );
};

export default FilterProvider;
