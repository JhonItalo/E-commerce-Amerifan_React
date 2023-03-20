import React, { useContext, useEffect } from "react";
import { AuthUserContext, contextAuthUser } from "../../contexts/AuthUser";
import { Navigate } from "react-router-dom";
import { RedirectLoginContext, page } from "../../contexts/RedirectLogin";

type props = {
     redirect?: string | null;
     children: JSX.Element;
};

const PrivateRoute = ({ children, redirect }: props) => {
     const { token } = useContext<contextAuthUser>(AuthUserContext);
     const { setUrl } = useContext<page>(RedirectLoginContext);

     useEffect(() => {
          if (!token) {
               setUrl(redirect);
          }
     }, [token]);

     return <>{!token ? <Navigate to="/login" /> : children}</>;
};

export default PrivateRoute;
