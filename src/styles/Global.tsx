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
 background-image: url("/Background.jpg");
  background-repeat: repeat;
  background-size: cover;
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


`;

export default GlobalStyle;
