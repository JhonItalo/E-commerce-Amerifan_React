import * as S from "./styles";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import ModalAllDepartaments from "../../components/modalAllDepartaments";

const Nav = () => {
     const { pathname } = useLocation();
     return (
          <>
               {pathname != "/login" && pathname != "/register" && (
                    <S.Nav>
                         <ul>
                              <S.Departments>
                                   <AiOutlineMenu className="icone_menu" />
                                   <p>Departamentos</p>
                                   <SlArrowDown className="icone_arrow" />
                                   <ModalAllDepartaments />
                              </S.Departments>

                              <S.Li>
                                   <Link to="/telefonia">
                                        <p className={pathname === "/telefonia" ? "active" : ""}>Telefonia</p>
                                   </Link>
                              </S.Li>
                              <S.Li>
                                   <Link to="/smartphones">
                                        <p className={pathname === "/smartphones" ? "active" : ""}>Smartphones</p>
                                   </Link>
                              </S.Li>
                              <S.Li>
                                   <Link to="/eletrodomesticos">
                                        <p className={pathname === "/eletrodomesticos" ? "active" : ""}>Eletrodomésticos</p>
                                   </Link>
                              </S.Li>
                              <S.Li>
                                   <Link to="/moveis">
                                        <p className={pathname === "/moveis" ? "active" : ""}>Movéis</p>
                                   </Link>
                              </S.Li>

                              <S.Li>
                                   <Link to="/tvevideo">
                                        <p className={pathname === "/tvevideo" ? "active" : ""}>Tv e vídeo</p>
                                   </Link>
                              </S.Li>

                              <S.Li>
                                   <Link to="/">
                                        <p className={pathname === "/eletroportateis" ? "active" : ""}>EletroPortáteis</p>
                                   </Link>
                              </S.Li>
                              <S.Li>
                                   <Link to="/">
                                        <p className={pathname === "/informatica" ? "active" : ""}>Informática</p>
                                   </Link>
                              </S.Li>
                              <S.Li>
                                   <Link to="/">
                                        <p className={pathname === "/servicos" ? "active" : ""}>Serviços</p>
                                   </Link>
                              </S.Li>
                         </ul>
                    </S.Nav>
               )}
          </>
     );
};

export default Nav;
