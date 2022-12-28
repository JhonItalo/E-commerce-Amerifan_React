import React, { createContext, useState, useEffect } from "react";
import useFirstRender from "../hooks/useFirstRender";

type storageType = {
     name: string;
     image: string;
     count: number;
};

type contextType = {
     storage: storageType[];
     setStorage: React.Dispatch<React.SetStateAction<storageType[]>>;
};
const defaultValue = {
     storage: [],
     setStorage: () => {
          //nothing
     },
};
export const CartContext = createContext<contextType>(defaultValue);

const InicitializeLocalStorage = () => {
     const localStorageString = localStorage.getItem("carrinho");
     if (typeof localStorageString != typeof "string") {
          localStorage.setItem("carrinho", "[]");
          return [];
     } else {
          const localStorageArray = JSON.parse(localStorageString!);
          return localStorageArray;
     }
};

interface props {
     children: React.ReactNode;
}
const CarrinhoContext = ({ children }: props) => {
     console.log("coxtent render");
     const [storage, setStorage] = useState<storageType[]>(InicitializeLocalStorage);
     const firstRender = useFirstRender();

     const writingNewValueLocalStorage = () => {
          localStorage.setItem("carrinho", JSON.stringify(storage));
     };

     useEffect(() => {
          if (firstRender === false) {
               writingNewValueLocalStorage();
          }
     }, [storage]);

     return <CartContext.Provider value={{ storage, setStorage }}>{children}</CartContext.Provider>;
};

export default CarrinhoContext;
