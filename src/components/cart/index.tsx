import * as S from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import AccessibleName from "../AcessibleName";
import AccessibleButtonName from "../AcessibleButtonName";
const Cart = () => {
     const { storage } = useContext(CartContext);
     return (
          <S.Conteiner>
               <Link to="/cart">
                    <span>{storage.length > 0 && storage.length}</span>
                    <BsCart3 />
                    <AccessibleButtonName name="cart" />
               </Link>
          </S.Conteiner>
     );
};

export default Cart;
