import React from "react";
import MinHeader from "../../layouts/minHeader";
import * as S from "./styles";

const RegisterContent = () => {
     return (
          <>
               <MinHeader />
               <S.Content>
                    <p className="title">criar seu cadastro</p>
                    <span className="subtitle">
                         veja seus pedidos de forma fácil, compre mais rápido e tenha uma
                         <br /> experiência personalizada :)
                    </span>
                    <form>
                         <label className="name">
                              <p>nome completo</p>
                              <input type="text" />
                         </label>
                         <div className="genres">
                              <p>genero</p>
                              <label className="radios">
                                   <input type="radio" />
                                   feminino
                              </label>
                              <label className="radios">
                                   <input type="radio" />
                                   masculino
                              </label>
                              <label className="radios">
                                   <input type="radio" />
                                   não informar
                              </label>
                         </div>
                         <label>
                              <p>cpf</p>
                              <input type="text" />
                         </label>
                         <label>
                              <p>telefone</p>
                              <input type="text" />
                         </label>
                         <label>
                              <p>email</p>
                              <input type="text" />
                         </label>
                         <label>
                              <p>senha</p>
                              <input type="text" />
                         </label>
                         <button>criar seu cadastro</button>
                    </form>
               </S.Content>
          </>
     );
};

export default RegisterContent;
