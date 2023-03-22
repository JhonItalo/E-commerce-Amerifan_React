import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

const BannerSecondary = () => {
     return (
          <S.Teste>
               <Link to="/smartphones"></Link>
               <Link to="/moveis"></Link>
          </S.Teste>
     );
};

export default BannerSecondary;
