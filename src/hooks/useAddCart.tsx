import { useEffect, useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

interface props {
     name: string;
     image: string;
}

const UseAddCart = ({ name, image }: props) => {
     const [adiconarCarrinho, setAdcionarCarrinho] = useState<number>(0);
     const { storage, setStorage } = useContext(CartContext);

     useEffect(() => {
          if (adiconarCarrinho > 0) {
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
     }, [adiconarCarrinho]);

     return { setAdcionarCarrinho };
};

export default UseAddCart;
