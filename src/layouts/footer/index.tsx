import * as S from "./styles";
import { Link } from "react-router-dom";
import { GrFacebook } from "react-icons/gr";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
     console.log("footer render");
     return (
          <S.Footer>
               
               <S.ItemComposto>
                    <div>
                         <p className="title">Baixe o nosso App</p>
                         <Link to="teste">
                              <span style={{ position: "absolute", visibility: "hidden", fontSize: "0.5rem" }}>
                                   Vá para o Google play
                              </span>
                              <img src="/google.webp" alt="Google play" style={{ width: "70%", height: "40px" }} />
                         </Link>
                         <Link to="teste">
                              <span style={{ position: "absolute", visibility: "hidden", fontSize: "0.5rem" }}>
                                   Vá para o Apple store
                              </span>
                              <img src="/iphone.webp" alt="Apple Store" style={{ width: "60%", height: "30px" }} />
                         </Link>
                    </div>
                    <div className="redesSociais">
                         <p className="title">Redes Sociais</p>
                         <div className="icons">
                              <Link to="/teste">
                                   <span style={{ position: "absolute", visibility: "hidden", fontSize: "0.2rem" }}>
                                        Vá para o Facebook
                                   </span>
                                   <GrFacebook />
                              </Link>
                              <Link to="/teste">
                                   <span style={{ position: "absolute", visibility: "hidden", fontSize: "0.2rem" }}>
                                        Vá para o Twitter
                                   </span>
                                   <AiFillTwitterSquare />
                              </Link>
                              <Link to="/teste">
                                   <span style={{ position: "absolute", visibility: "hidden", fontSize: "0.2rem" }}>
                                        Vá para o Youtube
                                   </span>
                                   <FaYoutubeSquare />
                              </Link>
                         </div>
                    </div>
               </S.ItemComposto>
               <S.ItemComposto>
                    <div>
                         <p className="title">Atendimento</p>

                         <p>loja online: 0000 0000</p>

                         <p>loja Física: 0800 000 000</p>

                         <p>Rio de Janeiro e região: 0800 000 0000</p>

                         <Link to="/teste">
                              <p>Fale pelo Whatsapp</p>
                         </Link>
                    </div>
                    <div>
                         <p className="title">Central de Vendas</p>
                         <Link to="/teste">
                              <p>Compre pelo WhatsApp</p>
                         </Link>
                    </div>
               </S.ItemComposto>
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
