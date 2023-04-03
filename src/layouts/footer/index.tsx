import * as S from "./styles";
import { Link } from "react-router-dom";
import { GrFacebook } from "react-icons/gr";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";
import AccessibleName from "../../components/acessibleName1";
import AccessibleButtonName from "../../components/acessibleButtonName1";
import { useLocation } from "react-router-dom";
const Footer = () => {
     const { pathname } = useLocation();
     return (
          <>
               {pathname != "/login" && pathname != "/register" && (
                    <S.Footer>
                         <ul>
                         <S.ItemComposto>
                              <div>
                                   <p className="title">Baixe o nosso App</p>
                                   <Link to="telefonia">
                                        <img src="/assets/play/google.webp" alt="Google play" width="100px" height="45px" />
                                        <AccessibleName name="google play" />
                                   </Link>
                                   <Link to="telefonia">
                                        <img src="/assets/play/iphone.webp" alt="Apple store" width="90px" height="30px" />
                                        <AccessibleName name="apple store" />
                                   </Link>
                              </div>
                              <div className="redesSociais">
                                   <p className="title">Redes Sociais</p>
                                   <div className="icons">
                                        <Link to="/telefonia">
                                             <GrFacebook />
                                             <AccessibleButtonName name="vá para o facebook" />
                                        </Link>
                                        <Link to="/telefonia">
                                             <AiFillTwitterSquare />
                                             <AccessibleButtonName name="vá para o facebook" />
                                        </Link>
                                        <Link to="/telefonia">
                                             <FaYoutubeSquare />
                                             <AccessibleButtonName name="vá para o facebook" />
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

                                   <Link to="/telefonia">
                                        <p>Fale pelo Whatsapp</p>
                                   </Link>
                              </div>
                              <div>
                                   <p className="title">Central de Vendas</p>
                                   <Link to="/telefonia">
                                        <p>Compre pelo WhatsApp</p>
                                   </Link>
                              </div>
                         </S.ItemComposto>
                         <S.Item>
                              <p className="title">Ajuda</p>
                              <Link to="/telefonia">
                                   <p>Mapa do Site</p>
                              </Link>
                              <Link to="/telefonia">
                                   <p>Prazos e locais de entrega</p>
                              </Link>
                              <Link to="/telefonia">
                                   <p>Política de Troca e Devolução</p>
                              </Link>
                              <Link to="/telefonia">
                                   <p>Portal de Privacidade</p>
                              </Link>
                              <Link to="/telefonia">
                                   <p>Nota Fiscal paulista</p>
                              </Link>
                              <Link to="/telefonia">
                                   <p>Termos e Condições de Uso</p>
                              </Link>
                              <Link to="/telefonia">
                                   <p>Quantidade de itens por pedido</p>
                              </Link>
                         </S.Item>
                         <S.Item>
                              <p className="title">Amerifan</p>
                              <Link to="/telefonia">
                                   <p> Serviços</p>
                              </Link>
                              <Link to="/telefonia">
                                   <p>Blog Amerifan.com.br</p>
                              </Link>
                              <Link to="/telefonia">
                                   <p>Trabalhe conosco</p>
                              </Link>
                              <Link to="/telefonia">
                                   <p>Lista de Presentes</p>
                              </Link>
                              <Link to="/telefonia">
                                   <p>Black Friday</p>
                              </Link>
                              <Link to="/telefonia">
                                   <p>Venda seus produhrefs no Amerifan.com.br</p>
                              </Link>
                              <Link to="/telefonia">
                                   <p>Segurança Digital</p>
                              </Link>
                         </S.Item>
                         <S.Item>
                              <p className="title">Cartão Amerifan</p>
                         </S.Item>
                         </ul>
                    </S.Footer>
               )}
          </>
     );
};

export default Footer;
