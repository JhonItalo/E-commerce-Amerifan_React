import React, { useContext } from "react";
import { CartContext, storageType } from "../../contexts/CartContext";
import * as S from "./styles";

const ItemCart = ({ name, image, count }: storageType) => {
     const { storage, setStorage } = useContext(CartContext);
     const copyStorage = storage.concat();

     const removeQuantityItem = () => {
          for (let i = 0; i < copyStorage.length; i++) {
               console.log("popsition verify");
               if (copyStorage[i].name === name) {
                    if (copyStorage[i].count >= 2) {
                         copyStorage[i].count = copyStorage[i].count - 1;
                         setStorage(copyStorage);
                         return;
                    } else if (copyStorage[i].count === 1) {
                         copyStorage.splice(i, 1);
                         setStorage(copyStorage);
                         return;
                    } else {
                         return;
                    }
               }
          }
     };
     const addQuantityItem = () => {
          for (let i = 0; i < copyStorage.length; i++) {
               console.log("popsition verify");
               if (copyStorage[i].name === name) {
                    copyStorage[i].count = copyStorage[i].count + 1;
                    setStorage(copyStorage);
                    return;
               }
          }
     };

     return (
          <div>
               <S.Item>
                    <S.ConteinerFilme>
                         <img src={image} />
                         <p className="p">x</p>
                         <S.Informacoes>
                              <div className="text">
                                   <p className="title">{name}</p>
                              </div>
                         </S.Informacoes>
                    </S.ConteinerFilme>
                    <S.CountPrice>
                         <S.Count>
                              <button onClick={removeQuantityItem}>-</button>
                              <p>{count}</p>
                              <button onClick={addQuantityItem}>+</button>
                         </S.Count>
                         <S.Price>
                              <p>$$$</p>
                         </S.Price>
                    </S.CountPrice>
               </S.Item>
          </div>
     );
};

export default ItemCart;
