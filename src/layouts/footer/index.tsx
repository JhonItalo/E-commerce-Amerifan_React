import * as S from "./styles";
import { Link } from "react-router-dom";
import { GrFacebook } from "react-icons/gr";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
     console.log("footer render");
     return (
          <S.Footer>
               <S.Item>
                    <p className="title">Ajuda</p>
                    <Link to="/teste">
                         <p>Mapa do Site</p>
                    </Link>
                    <Link to="/teste">
                         <p>Prazos e locais de entrega</p>
                    </Link>
                    <Link to="/teste">
                         <p>Política de Troca e Devolução</p>
                    </Link>
                    <Link to="/teste">
                         <p>Portal de Privacidade</p>
                    </Link>
                    <Link to="/teste">
                         <p>Nota Fiscal paulista</p>
                    </Link>
                    <Link to="/teste">
                         <p>Termos e Condições de Uso</p>
                    </Link>
                    <Link to="/teste">
                         <p>Quantidade de itens por pedido</p>
                    </Link>
               </S.Item>
               <S.Item>
                    <p className="title">Amerifan</p>
                    <Link to="/teste">
                         <p> Serviços</p>
                    </Link>
                    <Link to="/teste">
                         <p>Blog Amerifan.com.br</p>
                    </Link>
                    <Link to="/teste">
                         <p>Trabalhe conosco</p>
                    </Link>
                    <Link to="/teste">
                         <p>Lista de Presentes</p>
                    </Link>
                    <Link to="/teste">
                         <p>Black Friday</p>
                    </Link>
                    <Link to="/teste">
                         <p>Venda seus produtos no Amerifan.com.br</p>
                    </Link>
                    <Link to="/teste">
                         <p>Segurança Digital</p>
                    </Link>
               </S.Item>
               <S.Item>
                    <p className="title">Cartão Amerifan</p>
               </S.Item>
          </S.Footer>
     );
};

export default Footer;
/** */
