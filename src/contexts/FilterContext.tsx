import React, { createContext } from "react";

export type FiltercontextType = {
     type: string;
     color: string;

     setType: React.Dispatch<React.SetStateAction<string>>;
     setColor: React.Dispatch<React.SetStateAction<string>>;
};
const defaultValue = {
     type: "",
     color: "",
     setType: () => {},
     setColor: () => {},
};
export const FilterProviderContext = createContext<FiltercontextType>(defaultValue);

interface props {
     type: string;
     color: string;

     setType: React.Dispatch<React.SetStateAction<string>>;
     setColor: React.Dispatch<React.SetStateAction<string>>;
     children: React.ReactNode;
}

const FilterProvider = ({ type, color, setType, setColor, children }: props) => {
     return (
          <FilterProviderContext.Provider value={{ type, color, setType, setColor }}>{children}</FilterProviderContext.Provider>
     );
};

export default FilterProvider;
