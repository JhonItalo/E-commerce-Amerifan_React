import styled from "styled-components";

export const Item = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding-right: 1rem;
     @media (max-width: 748px) {
          align-items: initial;
          padding: 0;
     }
`;
export const ConteinerFilme = styled.div`
     display: flex;
     gap: 1rem;
     align-items: center;
     height: 100px;
     img {
          width: 70px;
          height: 100%;
     }
     @media (max-width: 748px) {
          width: 60%;
          img {
               width: 60px;
               height: 100px;
          }
          .p {
               display: none;
          }
     }
`;
export const Informacoes = styled.div`
     height: 100%;
     flex: none;
     .text {
          display: flex;
          flex-direction: column;
          .title {
               font-size: 1.2rem;
               letter-spacing: 4px;
          }
          .id {
               font-size: 0.9rem;
               color: grey;
          }
     }
     @media (max-width: 748px) {
          flex: initial;
          .text {
               width: 100%;
               .title {
                    font-size: 1rem;
                    letter-spacing: 2px;
               }
               .id {
                    font-size: 0.7rem;
               }
          }
     }
`;
export const CountPrice = styled.div`
     display: flex;
     gap: 8rem;
     @media (max-width: 748px) {
          flex: none;
          width: 40%;
          justify-content: space-between;
          padding-right: 1rem;
          align-items: center;
          gap: initial;
     }
`;
export const Count = styled.div`
     display: flex;
     margin-left: 2rem;
     p {
          padding: 0 0.5rem;
          font-size: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid black;
          border-top: 1px solid black;
     }
     button {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 0.4rem;
          font-size: 1rem;
     }
     @media (max-width: 748px) {
          margin: initial;
          p {
               width: 2rem;
               height: 1.5rem;
          }
          button {
               width: 1.5rem;
               height: 1.5rem;
          }
     }
`;

export const Price = styled.div`
     background-color: white;
`;
