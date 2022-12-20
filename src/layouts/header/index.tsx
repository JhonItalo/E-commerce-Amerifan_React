import { Link } from "react-router-dom";
import * as S from "./styles";
import Nav from "../nav";
import Search from "../../components/search";
import Cart from "../../components/cart";
import Logo from "../../components/logo";
import { HiOutlineUser } from "react-icons/hi";

const Header = () => {
     console.log("header render");
     return (
          <S.Header>
               <S.InitialPromotionSpan></S.InitialPromotionSpan>
               <S.Conteiner>
                    <S.Atendimento>
                         <Link to="/teste">Chame o vendedor</Link>
                         <Link to="/teste">Atendimento</Link>
                         <Link to="/teste">Lista de Presents</Link>
                    </S.Atendimento>

                    <S.Content>
                         <Logo />
                         <Search />
                         <S.Account>
                              <Link to="/teste">
                                   <HiOutlineUser />
                                   <p>
                                        <span>Entre ou Cadastre-se</span> <br /> para ver seus pedidos
                                   </p>
                              </Link>
                         </S.Account>
                         <Cart />
                    </S.Content>
               </S.Conteiner>
               <Nav />
          </S.Header>
     );
};

export default Header;
