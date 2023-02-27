import React, { useContext } from "react";
import { AuthUserContext, contextAuthUser } from "../../contexts/AuthUser";
import { Navigate } from "react-router-dom";
import { RedirectLoginContext, page } from "../../contexts/RedirectLogin";
import styled from "styled-components";

type props = {
     redirect?: string | null;
     children: JSX.Element;
};

const PrivateRoute = ({ children, redirect }: props) => {
     const { token } = useContext<contextAuthUser>(AuthUserContext);
     const { setUrl } = useContext<page>(RedirectLoginContext);
     if (!token) {
          setUrl(redirect);
     }

     return <>{!token ? <Navigate to="/login" /> : children};</>;
};

export default PrivateRoute;

export const Conteiner = styled.div`
     width: 100%;
     min-height: 70vh;
     font-size: 1.5rem;
     display: flex;
     justify-content: center;
     align-items: center;
     color: rgb(102, 102, 102);

     svg {
          margin-right: 1rem;
     }
`;
