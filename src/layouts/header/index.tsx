import { Link } from "react-router-dom";
import * as S from "./styles";
import Nav from "../nav";
import Search from "../../components/search";
import Cart from "../../components/cart";
import Logo from "../../components/logo";
import { HiOutlineUser } from "react-icons/hi";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import AccessibleButtonName from "../../components/AcessibleButtonName";

const Header = () => {
     console.log("header render");
     return (
          <S.Header>
               <S.InitialPromotionSpan>
                    <p className="developer">Developer by John Ítalo Lima Lima</p>
                    <div>
                         <Link to="https://www.linkedin.com/in/johnitalodev/" target="_blank">
                              <AiFillLinkedin />
                              <AccessibleButtonName name="linkedin" />
                         </Link>
                         <Link to="https://github.com/JhonItalo" target="_blank">
                              <AiFillGithub />
                              <AccessibleButtonName name="github" />
                         </Link>
                    </div>
               </S.InitialPromotionSpan>
               <S.Content>
                    <S.MainContent>
                         <Logo />
                         <Search />
                         <S.Account>
                              <div className="account">
                                   <HiOutlineUser />
                                   <p>
                                        <span>Entre ou Cadastre-se</span> <br /> para ver seus pedidos
                                   </p>
                              </div>
                              <div className="modalLogin">
                                   <button>Faça seu login</button>
                                   <span>Ainda não possui cadastro?</span>
                                   <Link to="/">Cadastre-se aqui</Link>
                              </div>
                         </S.Account>
                         <Cart />
                    </S.MainContent>
               </S.Content>
               <Nav />
          </S.Header>
     );
};

export default Header;
