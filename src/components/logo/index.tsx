import * as S from "./styles";
import { Link } from "react-router-dom";

const Logo = () => {
     console.log("logo render");
     return (
          <S.Conteiner>
               <Link to="/">
                    <img src="/logo.png" alt="Logo Amerifan" height="90%" width="200px" />
                    <span style={{ position: "absolute", visibility: "hidden" }}> Logo Amerifan </span>
               </Link>
          </S.Conteiner>
     );
};

export default Logo;
