import * as S from "./styles";
import { HiOutlineUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Account = () => {
     const navigate = useNavigate();
     return (
          <S.Account>
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
          </S.Account>
     );
};

export default Account;
