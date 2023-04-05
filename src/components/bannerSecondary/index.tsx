import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import AccessibleName from "../acessibleName1";

const BannerSecondary = () => {
     return (
          <S.Teste>
               <Link to="/smartphones">
                    <AccessibleName name="promotion"/>
               </Link>
               <Link to="/moveis">
               <AccessibleName name="promotion2"/>
               </Link>
          </S.Teste>
     );
};

export default BannerSecondary;
