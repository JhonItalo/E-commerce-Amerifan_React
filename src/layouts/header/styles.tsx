import styled from "styled-components";

export const Header = styled.header`
     height: 225px;
     background-color: #000336;
     display: flex;
     flex-direction: column;
     @media (max-width: 1920px) and (min-width: 1441px) {
          height: 300px;
          max-width: 1920px;
     }
`;
export const InitialPromotionSpan = styled.div`
     height: 20%;
     background-color: black;
     color: white;
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 2rem;
     .developer {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          font-style: italic;
          text-transform: uppercase;
          font-size: 0.8rem;
     }
     div {
          font-size: 1.5rem;
          display: flex;
          gap: 0.5rem;
     }
`;
export const Content = styled.div`
     width: 100%;
     height: 55%;
     padding: 0 5rem;
     display: flex;
     align-items: center;
`;
export const MainContent = styled.div`
     flex: none;
     width: 100%;
     height: 55%;
     margin-top: 2rem;
     padding-bottom: 1rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     background-color: #000336;
`;
export const Account = styled.div`
     position: relative;

     .account {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;

          svg {
               font-size: 2rem;
               color: white;
          }
          p {
               color: white;
               span {
                    font-weight: 700;
               }
          }
     }
     &:hover {
          .modalLogin {
               display: flex;
          }
     }
     .modalLogin {
          display: none;
          width: 130%;
          height: 150px;
          position: absolute;
          top: 100%;
          flex-direction: column;
          justify-content: center;
          gap: 1rem;
          align-items: center;
          background-color: white;
          z-index: 2;

          button {
               min-width: 60%;
               padding: 1rem;
               height: 40px;
               display: flex;
               justify-content: center;
               align-items: center;
               font-size: 1rem;
               border-radius: 5px;
               border: none;
               cursor: pointer;
               color: white;
               background-color: #127bc0;
               &:hover {
                    filter: brightness(0.9);
               }
          }
          span {
               font-size: 0.9rem;
               color: #413e3e;
          }
          a {
               text-decoration: underline;
               color: red;
          }
          @media (max-width: 1920px) and (min-width: 1441px) {
               height: 200px;
          }
          @media (max-width: 1440px) and (min-width: 1367px) {
               height: 160px;
          }
     }
`;
