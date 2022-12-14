import { useEffect, useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import useFirstRender from "../hooks/useFirstRender";

interface props {
     name: string;
     image: string;
}

const UseAddCart = ({ name, image }: props) => {
     const [AdiconarCarrinho, setAdcionarCarrinho] = useState<boolean>(false);
     const { storage, setStorage } = useContext(CartContext);
     const firstRender = useFirstRender();

     useEffect(() => {
          if (firstRender === false) {
               const copyStorage = storage.concat();
               for (let i = 0; i < storage.length; i++) {
                    if (copyStorage[i].name === name) {
                         copyStorage[i].count = copyStorage[i].count + 1;
                         localStorage.setItem("carrinho", JSON.stringify(copyStorage));
                         setStorage(copyStorage);
                         return;
                    }
               }
               copyStorage.push({ name: name, image: image, count: 1 });
               localStorage.setItem("carrinho", JSON.stringify(copyStorage));
               setStorage(copyStorage);
               return;
          }
     }, [AdiconarCarrinho]);

     return { setAdcionarCarrinho };
};

export default UseAddCart;
