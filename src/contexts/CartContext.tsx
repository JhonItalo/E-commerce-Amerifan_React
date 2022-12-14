import { createContext, useState } from "react";
import React from "react";

interface teste {
     name: string;
     image: string;
     count: number;
}

interface context {
     storage: teste[];
     setStorage: React.Dispatch<React.SetStateAction<teste[]>>;
}
const defaultValue = {
     storage: [],
     setStorage: () => {
          //nothing
     },
};
export const CartContext = createContext<context>(defaultValue);



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
     const [storage, setStorage] = useState<teste[]>(InicitializeLocalStorage);
     console.log(storage, "dentro do contexto");

     return <CartContext.Provider value={{ storage, setStorage }}>{children}</CartContext.Provider>;
};

export default CarrinhoContext;
/* useEffect(() => {
          if (firstRender === false) {
               const localStorageString = localStorage.getItem("carrinho");
               const localStorageArray = JSON.parse(localStorageString!);
               if (localStorageArray.length === 0) {
                    return;
               } else {
                    setStorage(localStorageArray);
               }
          }
     }, [storage]);*/
