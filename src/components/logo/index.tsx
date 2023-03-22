import * as S from "./styles";
import { Link } from "react-router-dom";
import AccessibleName from "../acessibleName1";

const Logo = () => {
     return (
          <S.Conteiner>
               <Link to="/">
                    <img src="/logo.png" alt="Logo Amerifan" height="90%" width="200px" />
                    <AccessibleName name="Logo Amerifan" />
               </Link>
          </S.Conteiner>
     );
};

export default Logo;
