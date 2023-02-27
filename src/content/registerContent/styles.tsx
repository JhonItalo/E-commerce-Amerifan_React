import styled from "styled-components";

export const Content = styled.main`
     display: block;
     width: 600px;
     margin: 0 auto;
     margin-top: 5rem;
     padding: 0 1rem;
     text-align: center;
     border: 1px solid red;
     font-size: 1rem;
     font-family: Arial, Helvetica, sans-serif;
     background-color: beige;

     .title {
          font-size: 2rem;
          font-weight: bold;
          color: rgb(102, 102, 102);
     }
     .subtitle {
          display: block;
          margin-top: 2rem;
          font-size: 1.1rem;
          color: rgb(102, 102, 102);
     }
     form {
          .name {
               display: block;
               width: 100%;
               margin-top: 2rem;
               text-align: start;

               input {
                    width: 70%;
                    height: 50px;
                    padding: 1rem;
                    margin-top: 0.5rem;
                    border-radius: 8px;
                    border: 1px solid grey;
                    outline: none;
               }
          }
          .genres {
               width: 100%;
               text-align: start;
               margin-top: 1.5rem;
               .radios {
                    margin-right: 1rem;
                    input {
                         margin-right: 0.4rem;
                    }
               }
          }
     }
`;
