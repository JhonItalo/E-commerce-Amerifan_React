import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

import AccessibleButtonName from "../acessibleButtonName1";

const BannerSecondary = () => {
     return (
          <S.Teste>
               <Link to="/smartphones">
                    <AccessibleButtonName name="promotion"/>
               </Link>
               <Link to="/moveis">
               <AccessibleButtonName name="promotion 2"/>
               </Link>
          </S.Teste>
     );
};

export default BannerSecondary;
