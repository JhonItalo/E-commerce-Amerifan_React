import * as S from "./styles";
import { HiOutlineUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthUserContext, contextAuthUser } from "../../contexts/AuthUser";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";

const Account = () => {
     const navigate = useNavigate();
     const { token } = useContext<contextAuthUser>(AuthUserContext);

     return (
          <S.Account>
               {token ? (
                    <div className="user" onClick={() => navigate("/user")}>
                         <FaRegUserCircle />
                         <p className="title">
                              <span>
                                   Olá, user <br />
                              </span>
                              <span>minha conta</span>
                         </p>
                         <MdKeyboardArrowDown style={{ fontSize: "1.2rem", marginTop: "0.7rem" }} />
                    </div>
               ) : (
                    <>
                         <div className="account">
                              <HiOutlineUser />
                              <p>
                                   <span>Entre ou Cadastre-se</span> <br /> para ver seus pedidos
                              </p>
                         </div>
                         <div className="modalLogin">
                              <div>
                                   <button onClick={() => navigate("/login")}>Faça seu login</button>
                                   <span>Ainda não possui cadastro?</span>
                                   <Link to="/register">Cadastre-se aqui</Link>
                              </div>
                         </div>
                    </>
               )}
          </S.Account>
     );
};

export default Account;
