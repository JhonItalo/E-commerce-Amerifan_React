// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
    padding: 0 ;
    margin: 0;
    box-sizing: border-box;
 }

 body{
  background-color: white;
  overflow-x: hidden;
 }
 ul{
   list-style: none;
 }
 a{
   text-decoration: none;
   &:visited{color: inherit;}
   &:link{color:inherit;}
   &:hover{color:inherit;}
   &:active{color:inherit;}
 }
 @media (max-width: 1920px) and (min-width: 1441px) {
          html{
            font-size: 18px;
          }
     }
   

`;

export default GlobalStyle;
