import * as S from "./styles";
import { Link } from "react-router-dom";

const Logo = () => {
     console.log("logo render");
     return (
          <S.Conteiner>
               <Link to="/">
                    <img src="/logo.png" alt="" />
               </Link>
          </S.Conteiner>
     );
};

export default Logo;
