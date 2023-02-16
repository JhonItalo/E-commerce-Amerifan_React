import React from "react";
import { Link } from "react-router-dom";
import AccessibleName from "../components/AcessibleName";

const Login = () => {
     return (
          <Conteiner>
               <Link to="/">
                    <img src="/logo.png" alt="Logo Amerifan" height="90%" width="200px" />
                    <AccessibleName name="Logo Amerifan" />
               </Link>{" "}
          </Conteiner>
     );
};

export default Login;

import styled from "styled-components";

export const Conteiner = styled.div`
     width: 100%;
     height: 100px;
     background-color: #000336;
     display: flex;
     align-items: center;
`;
