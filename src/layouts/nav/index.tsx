import * as S from "./styles";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import ModalAllDepartaments from "../../components/modalAllDepartaments";

const Nav = () => {
     console.log("nave render");
     const { pathname } = useLocation();
     return (
          <>
               {pathname != "/login" && (
                    <S.Nav>
                         <ul>
                              <S.Departments>
                                   <AiOutlineMenu className="icone_menu" />
                                   <p>Departamentos</p>
                                   <SlArrowDown className="icone_arrow" />
                                   <ModalAllDepartaments />
                              </S.Departments>

                              <S.Li active={pathname === "/telefonia"}>
                                   <Link to="/telefonia">
                                        <p>Telefonia</p>
                                   </Link>
                              </S.Li>
                              <S.Li active={pathname === "/smartphones"}>
                                   <Link to="/smartphones">
                                        <p>Smartphones</p>
                                   </Link>
                              </S.Li>
                              <S.Li active={pathname === "/eletrodomesticos"}>
                                   <Link to="/eletrodomesticos">
                                        <p>Eletrodomésticos</p>
                                   </Link>
                              </S.Li>
                              <S.Li active={pathname === "/moveis"}>
                                   <Link to="/moveis">
                                        <p>Movéis</p>
                                   </Link>
                              </S.Li>

                              <S.Li active={pathname === "/tvevideo"}>
                                   <Link to="/tvevideo">
                                        <p>Tv e vídeo</p>
                                   </Link>
                              </S.Li>

                              <S.Li active={pathname === "/eletroportateis"}>
                                   <Link to="/">
                                        <p>EletroPortáteis</p>
                                   </Link>
                              </S.Li>
                              <S.Li active={pathname === "/informatica"}>
                                   <Link to="/">
                                        <p>Informática</p>
                                   </Link>
                              </S.Li>
                              <S.Li active={pathname === "/servicos"}>
                                   <Link to="/">
                                        <p>Serviços</p>
                                   </Link>
                              </S.Li>
                         </ul>
                    </S.Nav>
               )}
          </>
     );
};

export default Nav;
