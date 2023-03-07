import React, { useContext, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { Link, Navigate } from "react-router-dom";
import { BsEyeSlash } from "react-icons/bs";
import { AiOutlineUser, AiOutlineCloseCircle } from "react-icons/ai";
import { AuthUserContext, contextAuthUser } from "../../contexts/AuthUser";
import { RedirectLoginContext, page } from "../../contexts/RedirectLogin";
import MinHeader from "../../layouts/minHeader";

const LoginContent = () => {
     console.log("login render");
     const { url, setUrl } = useContext<page>(RedirectLoginContext);
     const { authentication, token } = useContext<contextAuthUser>(AuthUserContext);
     const [email, setEmail] = useState<string>("");
     const [senha, setSenha] = useState<string>("");
     const [activeEmailBorder, setActiveEmailBorder] = useState<boolean | null>(null);
     const [activeSenhaBorder, setActiveSenhaBorder] = useState<boolean | null>(null);
     const [spanEmail, setSpanEmail] = useState<boolean>(false);
     const [spanSenha, setSpanSenha] = useState<boolean>(false);
     const [failure, setFailure] = useState<boolean>(false);
     const senhaRef = useRef<HTMLInputElement>(null);

     useEffect(() => {
          if (token) {
               setUrl(null);
          }
     }, [token]);

     if (token) {
          if (url) {
               return <Navigate to={url} />;
          }
          return <Navigate to="/" />;
     }

     const validationEmail = (email: string) => {
          const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
          return regex.test(email);
     };

     const changeEmail = (e: React.FormEvent<HTMLInputElement>) => {
          setEmail(e.currentTarget.value);
          if (validationEmail(e.currentTarget.value)) {
               setActiveEmailBorder(true);
          } else {
               setActiveEmailBorder(false);
          }
     };

     const changeSenha = (e: React.FormEvent<HTMLInputElement>) => {
          setSenha(e.currentTarget.value);
          if (e.currentTarget.value.length < 8) {
               setActiveSenhaBorder(false);
          } else {
               setActiveSenhaBorder(true);
          }
     };

     const hiddenSenha = () => {
          if (senhaRef) {
               const type = senhaRef.current?.getAttribute("type");
               if (type === "text") {
                    senhaRef.current?.setAttribute("type", "password");
               } else if (type === "password") {
                    senhaRef.current?.setAttribute("type", "text");
               }
          }
     };

     const Login = async (e: React.SyntheticEvent) => {
          e.preventDefault();
          if (validationEmail(email) && senha.length > 8) {
               const result = await authentication(email, senha);
               if (result) {
                    return;
               } else {
                    setFailure(true);
               }
          }
          if (validationEmail(email) === false) {
               setSpanEmail(true);
          } else {
               setSpanEmail(false);
          }
          if (senha.length < 8) {
               setSpanSenha(true);
          } else {
               setSpanSenha(false);
          }
     };

     return (
          <>
               <MinHeader />
               <S.Content failure={failure}>
                    <div className="title">
                         <AiOutlineUser />
                         <p>login do cliente</p>
                    </div>
                    <p className="subtitle">
                         Veja seus pedidos de forma fácil, compre mais rápido <br /> e tenha uma experiência personalizada :)
                    </p>

                    <div className="failure">
                         <AiOutlineCloseCircle />
                         <p>E-mail ou senha incorretos</p>
                    </div>
                    <S.Form onSubmit={Login} activeEmail={activeEmailBorder} activeSenha={activeSenhaBorder}>
                         <label className="inputs">
                              <p>
                                   <span>*</span> e-mail
                              </p>
                              <input required type="text" placeholder="Digite seu e-mail" value={email} onChange={changeEmail} />
                              <S.Invalid active={spanEmail}>campo inválido</S.Invalid>
                         </label>

                         <label className="inputs">
                              <div className="senhaTopicLabel">
                                   <p>
                                        <span>*</span> senha
                                   </p>
                                   <p>esqueceu?</p>
                              </div>
                              <div className="senhaInput">
                                   <input
                                        type="password"
                                        placeholder="Digite sua senha"
                                        value={senha}
                                        onChange={changeSenha}
                                        ref={senhaRef}
                                        minLength={8}
                                        required
                                   />
                                   <BsEyeSlash onClick={hiddenSenha} />
                              </div>
                              <S.Invalid active={spanSenha}>campo inválido</S.Invalid>
                         </label>
                         <button type="submit">Continuar</button>
                    </S.Form>

                    <p className="register">
                         Não tem cadastro? <Link to="/register">cadastre-se</Link>
                    </p>

                    <p className="politicprivacy">
                         Ao continuar com o acesso, você concorda com a nossa <Link to="/">política de privacidade</Link>
                    </p>
               </S.Content>
               <S.Modal>
                    <p>email: eve.holt@reqres.in</p>
                    <p>senha: cityslicka</p>
               </S.Modal>
          </>
     );
};

export default LoginContent;
