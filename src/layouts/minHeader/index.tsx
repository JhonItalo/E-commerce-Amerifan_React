import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import AccessibleName from "../../components/AcessibleName";

const MinHeader = () => {
     return (
          <S.Header>
               <Link to="/">
                    <img src="/logo.png" alt="Logo Amerifan" height="100%" width="170px" />
                    <AccessibleName name="Logo Amerifan" />
               </Link>
          </S.Header>
     );
};

export default MinHeader;
