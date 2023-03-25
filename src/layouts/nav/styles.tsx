import styled from "styled-components";

export const Nav = styled.nav`
     width: 100%;
     height: 45px;
     display: flex;
     justify-content: center;
     align-items: center;
     position: relative;
     background-color: #01022a;
     ul {
          height: 88%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
          @media (max-width: 1920px) and (min-width: 1441px) {
               max-width: 1440px;
          }
     }

     @media (max-width: 1920px) and (min-width: 1441px) {
          height: 60px;
     }

     @media (max-width: 1440px) and (min-width: 1367px) {
          height: 50px;
     }
`;

export const Li = styled.li`
     height: 100%;
     a {
          height: 100%;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          text-transform: uppercase;

          .active {
               border-bottom: 2px solid #cc0000;
          }
     }
`;
export const Departments = styled.li`
     height: 100%;
     display: flex;
     align-items: center;
     text-transform: uppercase;
     gap: 0.7rem;
     cursor: default;
     p {
          font-size: 0.8rem;
     }
     .icone_menu {
          font-size: 1.5rem;
     }
     .icone_arrow {
          font-size: 0.8rem;
     }
     &:hover .modalAllDepartaments {
          display: flex;
     }
`;
